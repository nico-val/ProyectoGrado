using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models.FirmaElectronicaViewModels
{
    public class GenerarFirmaElectronicaViewModel
    {
        public int ClaveId { get; set; }
        public IFormFile Archivo { get; set; }
        public string Password { get; set; }
    }    
}
