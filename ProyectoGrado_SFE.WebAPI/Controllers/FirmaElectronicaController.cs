using LibreriaCriptografica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using ProyectoGrado_SFE.WebAPI.Data;
using ProyectoGrado_SFE.WebAPI.Helpers;
using ProyectoGrado_SFE.WebAPI.Models;
using ProyectoGrado_SFE.WebAPI.Models.FirmaElectronicaViewModels;

namespace ProyectoGrado_SFE.WebAPI.Controllers
{
    [Route("api/FirmaElectronica")]    
    public class FirmaElectronicaController : Controller
    {
        private readonly ApplicationDbContext _context;
        private UserManager<ApplicationUser> _userManager;


        public FirmaElectronicaController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }



        [Authorize(Roles = "Usuario")]
        [HttpGet("ClavesDisponibles")]
        public IActionResult ClavesDisponibles()
        {
            var currentUserId = _userManager.GetUserId(User);
            var currentUser = _context.Users.Include(u => u.Claves).First(u => u.Id == currentUserId);

            var claves = currentUser.Claves.Where(c => c.TieneCertificado).Select(c => new 
            {
                Id = c.ClaveId,
                NombreIdentificativo = c.NombreIdentificativo,               
            }).ToList();
            
            //var claves = _context.Clave.Where(c => c.TieneCertificado).Select(c => new { Id = c.ClaveId, Name = c.NombreIdentificativo }).ToDictionary(c => c.Id, c => c.Name);

            if (claves.Count == 0) return NotFound();

            return Ok(claves);
        }

        [Authorize(Roles = "Usuario")]
        [HttpPost("Generar")]
        public async Task<IActionResult> GenerarFirmaElectronica(GenerarFirmaElectronicaViewModel viewModel)
        {
            if (viewModel.Archivo.Length > 0)
            {
                using (var fileStream = viewModel.Archivo.OpenReadStream())
                using (var ms = new MemoryStream())
                {
                    fileStream.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    //string s = Convert.ToBase64String(fileBytes);                    

                    if (viewModel.ClaveId == null)
                        return Ok(new Response(false, "No se encontró la clave seleccionada."));
                    

                    var currentUser = await _userManager.GetUserAsync(User);

                    if (!await _userManager.CheckPasswordAsync(currentUser, viewModel.Password))
                        return Ok(new Response(false, "La contraseña es incorrecta."));

                    var clave = _context.Clave.SingleOrDefault(m => m.ClaveId == viewModel.ClaveId);                    
                    var securityData = new SecurityData(currentUser.DatosSeguridad);

                    var encPrivKey = Convert.FromBase64String(clave.EncPrivKey.Split('|')[0]);
                    var iv = Convert.FromBase64String(clave.EncPrivKey.Split('|')[1]);

                    var decodedPrivateKey = securityData.Decrypt(encPrivKey, viewModel.Password, iv);

                    byte[] firma = LibreriaCriptografica.FirmaElectronica.GenerarFirmaElectronica(fileBytes, new System.Numerics.BigInteger(decodedPrivateKey));

                    Dictionary<string, byte[]> archivos = new Dictionary<string, byte[]>();
                    archivos.Add("firma.bin", firma.Reverse<byte>().ToArray());
                    archivos.Add("certificado.crt", clave.Certificado);

                    var firmaByteArray = CompressionHelper.CompressToZip("test.test", archivos);

                    var fileName = viewModel.Archivo.FileName + ".frm";

                    

                    _context.RegistroFirmaElectronica.Add(new Models.FirmaElectronica()
                    {
                        ApplicationUser = currentUser,
                        Clave = clave,
                        FechaGeneracion = DateTime.Now,
                        Hash = LibreriaCriptografica.FirmaElectronica.ObtenerHash(fileBytes).ToHexString(),
                        NombreArchivo = viewModel.Archivo.FileName,
                        TamanoArchivo = viewModel.Archivo.Length
                    });

                    _context.SaveChanges();
                    Response.Headers.Add("Access-Control-Expose-Headers",new Microsoft.Extensions.Primitives.StringValues("Content-Disposition"));
                    return File(firmaByteArray, "application/x-msdownload", fileName);
                }
            }
            return null;
        }

        [HttpPost("Verificar")]
        [AllowAnonymous]
        public IActionResult VerificarFirmaElectronica(VerificarFirmaElectronicaViewModel viewModel)
        {
            if (viewModel.Archivo.Length > 0)
            {
                try
                {
                    using (var fileStream = viewModel.Archivo.OpenReadStream())
                    using (var ms = new MemoryStream())
                    using (var firmaStream = viewModel.ArchivoFirmaElectronica.OpenReadStream())
                    using (var msFirma = new MemoryStream())
                    {
                        fileStream.CopyTo(ms);
                        var fileBytes = ms.ToArray();

                        firmaStream.CopyTo(msFirma);
                        var firmaBytes = msFirma.ToArray();
                        //string s = Convert.ToBase64String(fileBytes);                                        

                        Dictionary<string, byte[]> archivos = CompressionHelper.UnCompressZip(firmaBytes);

                        var certificate = new X509Certificate2(archivos["certificado.crt"]);

                        var publicKey = certificate.GetPublicKey().Reverse<byte>().ToArray();

                        Punto publicKeyPoint = new Punto(publicKey);

                        var hex = publicKeyPoint.GetUncompressedByteArray().ToHexString();

                        var result = LibreriaCriptografica.FirmaElectronica.VerificarFirmaElectronica(publicKeyPoint, fileBytes, archivos["firma.bin"].Reverse<byte>().ToArray());

                        var commonName = certificate.GetNameInfo(X509NameType.SimpleName, false);

                        //var organizationArea = certificate.GetNameInfo(X509NameType., false);


                        var subjectViewModel = new CertificateSubjectViewModel();
                        var subjects = certificate.Subject.Split(',');

                        foreach (var subject in subjects)
                        {
                            var elements = subject.Split('=');
                            switch (elements[0].TrimStart(' ').TrimEnd(' '))
                            {
                                case "CN": subjectViewModel.CN = elements[1].TrimStart(' ').TrimEnd(' '); break;
                                case "OU": subjectViewModel.OU = elements[1].TrimStart(' ').TrimEnd(' '); break;
                                case "O": subjectViewModel.O = elements[1].TrimStart(' ').TrimEnd(' '); break;
                                case "S": subjectViewModel.S = elements[1].TrimStart(' ').TrimEnd(' '); break;
                                case "C": subjectViewModel.C = elements[1].TrimStart(' ').TrimEnd(' '); break;
                            }

                        }

                        return Ok(new VerificarFirmaElectronicaResultViewModel()
                        {
                            Result = result,
                            Subject = subjectViewModel,
                            FileName = viewModel.Archivo.FileName,
                            FileSize = viewModel.Archivo.Length,
                            FileHash = LibreriaCriptografica.FirmaElectronica.ObtenerHash(fileBytes).ToHexString()
                        });
                        //return File(firmaByteArray, "application/x-msdownload", fileName);
                    }
                }
                catch (System.IO.InvalidDataException e)
                {
                    return Ok(new Response(false, "Hubo un error"));
                }
                catch (Exception e){

                }
            }
            return null;
        }

        
    }
}
