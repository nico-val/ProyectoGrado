using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models.ClavesNoCertificadasViewModels
{
    public class CrearCSRViewModel
    {
        public string ClaveId { get; set; }
        public string DomainName { get; set; }
        public string CompanyName { get; set; }
        public string Division { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string CountryIso2Characters { get; set; }
        public string Email { get; set; }
    }
}
