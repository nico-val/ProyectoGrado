using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProyectoGrado_SFE.WebAPI.Data;
using ProyectoGrado_SFE.WebAPI.Models;
using ProyectoGrado_SFE.WebAPI.Models.ClavesViewModels;

namespace ProyectoGrado_SFE.WebAPI.Controllers
{
    [Authorize(Roles = "AutoridadDeRegistro")]
    [Route("api/AprobacionSolicitudes")]
    public class AprobacionSolicitudes : Controller
    {

        private readonly ApplicationDbContext _context;

        public AprobacionSolicitudes(ApplicationDbContext context, UserManager<ApplicationUser> userManager)
        {
            _context = context;
            _userManager = userManager;
        }

        private readonly UserManager<ApplicationUser> _userManager;


        [HttpGet]
        public async Task<IActionResult> Index()
        {
            var claves = _context.Clave.Include(c => c.ApplicationUser)
                            .Where(c => !c.TieneCertificado && c.EstadoVerificacion == null)
                            .Select(c => new ClaveAprobacionSolicitudViewModel() { ClaveId = c.ClaveId, NombreIdentificativo = c.NombreIdentificativo, NombreUsuario = c.ApplicationUser.UserName, FechaCreacion = c.FechaCreacion})
                            .ToList();
            return Ok(claves);
        }

        [HttpGet("{id}")]
        public IActionResult Ver(int id) {           

            var clave = _context.Clave.Include(c => c.ApplicationUser).SingleOrDefault(m => m.ClaveId == id);

            if (clave == null)
            {
                return NotFound();
            }

            return Ok(new {
                UserName = clave.ApplicationUser.UserName,
                FormattedPublicKey = clave.FormattedPublicKey,
                FechaCreacion = clave.FechaCreacion,
                NombreComun = clave.NombreComun,
                Email = clave.Email,
                Organizacion = clave.Organizacion,
                UnidadOrganizacional = clave.UnidadOrganizacional,
                Localidad = clave.Localidad,
                EstadoOProvincia = clave.EstadoOProvincia,
                Pais = clave.Pais
            });
            
        }

        public ActionResult Aprobar(int id)
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

            clave.UsuarioVerificador = "Usuario";
            clave.FechaVerificacion = DateTime.Now;
            clave.EstadoVerificacion = "Aprobado";

            _context.SaveChanges();

            return RedirectToAction("Index");
        }

        public class aprob {
            public bool aprobado;
        }

        [HttpPatch("{id}")]
        public ActionResult Aprobacion([FromBody]aprob aprobado, int id)
        {
            var clave = _context.Clave.SingleOrDefault(m => m.ClaveId == id);
            if (clave == null)
            {
                return NotFound();
            }

            clave.UsuarioVerificador = "Usuario";
            clave.FechaVerificacion = DateTime.Now;
            if (aprobado.aprobado) clave.EstadoVerificacion = "Aprobado";
            else clave.EstadoVerificacion = "Rechazado";

            _context.SaveChanges();

            return Ok();           
        }

    }
}
