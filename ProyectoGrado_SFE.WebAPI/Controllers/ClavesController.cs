using LibreriaCriptografica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;
using System.Text;
using ProyectoGrado_SFE.WebAPI.Data;
using ProyectoGrado_SFE.WebAPI.Models;
using ProyectoGrado_SFE.WebAPI.Models.ClavesViewModels;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Controllers
{    
    [Route("api/Claves")]
    [Authorize(Roles = "Usuario")]
    public class ClavesController : Controller
    {

        private readonly ApplicationDbContext _context;
        private readonly UserManager<ApplicationUser> _userManager;

        public ClavesController(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }
        // GET: api/Claves
        [HttpGet]
        public ListaClavesViewModel Get()
        {
            var clavesViewModel = new ListaClavesViewModel();

            var currentUserId = _userManager.GetUserId(User);            
            var currentUser = _context.Users.Include(u => u.Claves).First(u => u.Id == currentUserId);

            clavesViewModel.ClavesCertificadas = currentUser.Claves.Where(c => c.TieneCertificado).Select(c => new ClaveViewModel() {
                Id = c.ClaveId,
                NombreIdentificativo = c.NombreIdentificativo,
                FormattedPublicKey = c.FormattedPublicKey,
                FechaValidez = c.FechaValidez.Value
            });

            clavesViewModel.ClavesPendientes = currentUser.Claves.Where(c => !c.TieneCertificado).Select(c => new ClaveViewModel()
            {
                Id = c.ClaveId,
                NombreIdentificativo = c.NombreIdentificativo,
                FormattedPublicKey = c.FormattedPublicKey,
                //FechaValidez = c.FechaValidez.Value
            });

            return clavesViewModel;


        }

        // GET: api/Claves/5
        [HttpGet("{id}", Name = "Get")]
        public IActionResult Get(int id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var clave = _context.Clave.SingleOrDefault(m => m.ClaveId == id);
            if (clave == null)
            {
                return NotFound();
            }
            
            return Ok(clave);
        }


        // POST: api/Claves
        [HttpPost]
        [Authorize(Roles = "Usuario")]
        public async Task<IActionResult> Post([FromBody]CrearClaveViewModel claveViewModel)
        {

            var parNuevo = KeyPair.GenerarNuevo();            


            if (ModelState.IsValid)
            {
                var currentUserId = _userManager.GetUserId(User);
                var currentUser = _context.Users.Include(u => u.Claves).First(u => u.Id == currentUserId);

                if (!await _userManager.CheckPasswordAsync(currentUser, claveViewModel.Password))
                    return Ok(new Response(false, "La contraseña es incorrecta."));

                var securityData = new SecurityData(currentUser.DatosSeguridad);

                var iv = new byte[16];
                using (var rng = System.Security.Cryptography.RandomNumberGenerator.Create())
                {
                    rng.GetBytes(iv);
                }

                
                var encryptedPrivateKey = securityData.Encrypt(parNuevo.PrivateKey.ByteArray, claveViewModel.Password, iv);



                //System.Security.Claims.ClaimsPrincipal currentUser = this.User;
                //bool IsAdmin = currentUser.IsInRole("Admin");
                //var id = _userManager.GetUserId(User); // Get user id:
                //var user = await _userManager.GetUserAsync(User);

                var csrString = LibreriaCriptografica.CertificateSigningRequest.GeneratePkcs10(
                    parNuevo.PrivateKey,
                    parNuevo.PublicKey,
                    claveViewModel.CommonName,
                    claveViewModel.Organization,
                    claveViewModel.OrganizationUnit,
                    claveViewModel.City,
                    claveViewModel.State,
                    claveViewModel.CountryIso2Characters,
                    claveViewModel.Email
                    );

                _context.Add(new Clave()
                {
                    ApplicationUser = currentUser,
                    EncPrivKey = Convert.ToBase64String(encryptedPrivateKey) + "|" + Convert.ToBase64String(iv), //parNuevo.PrivateKey.ByteArray.ToHexString(),
                    PublicKey = parNuevo.PublicKey.ByteArray.ToHexString(),
                    NombreIdentificativo = claveViewModel.NombreIdentificativo,
                    Organizacion = claveViewModel.Organization,
                    UnidadOrganizacional = claveViewModel.OrganizationUnit,
                    Localidad = claveViewModel.City,
                    EstadoOProvincia = claveViewModel.State,
                    Pais = claveViewModel.CountryIso2Characters,
                    Email = claveViewModel.Email,
                    NombreComun = claveViewModel.CommonName,
                    CSR = Encoding.ASCII.GetBytes(csrString),
                    FechaCreacion = DateTime.Now
                });

                _context.SaveChanges();
                return Ok(new Response(true));;
            }            
            return Ok(new Response(false)); ;
            //return View();
        }

        [HttpGet("{id}/Certificado")]
        public FileResult DescargarCertificado(int id)
        {
            var clave = _context.Clave.SingleOrDefault(m => m.ClaveId == id);

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

            var fileName = string.Format("certificado_{0}_{1}.crt", commonName, unidadOrganizacional);

            Response.Headers.Add("Access-Control-Expose-Headers", new Microsoft.Extensions.Primitives.StringValues("Content-Disposition"));
            return File(clave.Certificado, "application/x-msdownload", fileName);
        }
    }
}
