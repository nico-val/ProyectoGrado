using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;
using ProyectoGrado_SFE.WebAPI.Data;
using ProyectoGrado_SFE.WebAPI.Models;

namespace ProyectoGrado_SFE.WebAPI.Controllers
{
    [Authorize(Roles = "AutoridadCertificante")]
    [Route("api/SolicitudesCertificacion")]
    public class SolicitudesCertificacion : Controller
    {
        private readonly ApplicationDbContext _context;

        public SolicitudesCertificacion(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        private readonly UserManager<ApplicationUser> _userManager;


        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var claves = _context.Clave.Include(c => c.ApplicationUser)
                .Where(c => !c.TieneCertificado && c.EstadoVerificacion == "Aprobado")
                .Select(c => new { ClaveId = c.ClaveId, UserName = c.ApplicationUser.UserName, NombreIdentificativo = c.NombreIdentificativo, FechaCreacion = c.FechaCreacion, UsuarioVerificador = c.UsuarioVerificador })
                .ToList();

            return Ok(claves);
        }

        [HttpGet("{id}")]
        public IActionResult Ver(int id)
        {

            var clave = _context.Clave.Include(c => c.ApplicationUser).SingleOrDefault(m => m.ClaveId == id);

            if (clave == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                UserName = clave.ApplicationUser.UserName,
                FormattedPublicKey = clave.FormattedPublicKey,
                FechaCreacion = clave.FechaCreacion,
                NombreComun = clave.NombreComun,
                Email = clave.Email,
                Organizacion = clave.Organizacion,
                UnidadOrganizacional = clave.UnidadOrganizacional,
                Localidad = clave.Localidad,
                EstadoOProvincia = clave.EstadoOProvincia,
                Pais = clave.Pais,
                UsuarioVerificador = clave.UsuarioVerificador,
                FechaVerificacion = clave.FechaVerificacion,
                EstadoVerificacion = clave.EstadoVerificacion
            });

        }

        [HttpGet("{id}/DescargarCSR")]
        public FileResult DescargarCSR(int id)
        {
            if (id == null)
            {
                //return NotFound();
            }

            var headerByteArray = Encoding.ASCII.GetBytes(string.Format("-----BEGIN CERTIFICATE REQUEST-----{0}", "\n"));
            var footerByteArray = Encoding.ASCII.GetBytes(string.Format("{0}-----END CERTIFICATE REQUEST-----", "\n"));

            var clave = _context.Clave.SingleOrDefault(m => m.ClaveId == id);

            var fileByteArray = new byte[headerByteArray.Length + footerByteArray.Length + clave.CSR.Length];

            System.Buffer.BlockCopy(headerByteArray, 0, fileByteArray, 0, headerByteArray.Length);
            System.Buffer.BlockCopy(clave.CSR, 0, fileByteArray, headerByteArray.Length, clave.CSR.Length);
            System.Buffer.BlockCopy(footerByteArray, 0, fileByteArray, headerByteArray.Length + clave.CSR.Length, footerByteArray.Length);

            var commonName = clave.NombreComun
                .Replace(" ", "_")
                .Replace("\\", "_")
                .Replace("/", "_")
                .Replace("*", "_")
                .Replace("<", "_")
                .Replace(">", "_");

            var unidadOrganizacional = clave.UnidadOrganizacional
                .Replace(" ", "_")
                .Replace("\\", "_")
                .Replace("/", "_")
                .Replace("*", "_")
                .Replace("<", "_")
                .Replace(">", "_");

            var fileName = string.Format("request_{0}_{1}.csr", commonName, unidadOrganizacional);

            Response.Headers.Add("Access-Control-Expose-Headers", new Microsoft.Extensions.Primitives.StringValues("Content-Disposition"));

            return File(fileByteArray, "application/x-msdownload", fileName);
        }

        public class PatchArchivo
        {
            public IFormFile archivo;
        }

        [HttpPatch("{id}")]
        public ActionResult CargarCertificado(int id, IFormFile certificado)
        {
            if (certificado.Length > 0)
            {
                using (var fileStream = certificado.OpenReadStream())
                using (var ms = new MemoryStream())
                {
                    fileStream.CopyTo(ms);
                    var fileBytes = ms.ToArray();
                    //string s = Convert.ToBase64String(fileBytes);                    

                    if (id == null)
                    {
                        return NotFound();
                    }

                    var clave = _context.Clave.SingleOrDefault(m => m.ClaveId == id);

                    try
                    {
                        var certificate = new X509Certificate2(fileBytes);


                        if (!certificate.GetPublicKey().SequenceEqual(clave.PublicKey_ByteArray))
                        {
                            return Ok(new { success = false, message = "El certificado ingresado no coincide con la clave pública de la solicitud." });
                        }

                        clave.Certificado = fileBytes;
                        clave.FechaCertificacion = DateTime.Now;
                        clave.UsuarioCertificador = "Entidad de Certificación";
                        clave.FechaValidez = certificate.NotAfter;

                        _context.SaveChanges();

                        return Ok(new { success = true });
                    }
                    catch (System.Security.Cryptography.CryptographicException)
                    {
                        return Ok(new { success = false, message = "El archivo ingresado no es un certificado válido."});
                    }
                }
            }

            return StatusCode(StatusCodes.Status500InternalServerError);
        }

    }
}
