using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoGrado_SFE.WebAPI.Data;
using ProyectoGrado_SFE.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Controllers
{
    [Route("api/Auditoria")]
    public class AuditoriaController : Controller
    {

        private readonly ApplicationDbContext _context;
        private UserManager<ApplicationUser> _userManager;

        public AuditoriaController(ApplicationDbContext context, UserManager<ApplicationUser> userManager) {
            _context = context;
            _userManager = userManager;
        }

        [HttpGet("FirmasElectronicas")]
        public ActionResult RegistroFirmasElectronicas()
        {
            var firmas = _context.RegistroFirmaElectronica.Include(f => f.Clave).Select(f => new {
                firmaId = f.FirmaId,
                userName = f.ApplicationUser.UserName,
                nombreClave = f.Clave.NombreIdentificativo,                
                nombreArchivo = f.NombreArchivo,
                tamanoArchivo = f.TamanoArchivo,
                hash = f.Hash,
                fechaGeneracion = f.FechaGeneracion
            });
            return Ok(firmas);
        }
    }
} 
