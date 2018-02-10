using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models.ClavesViewModels
{
    public class CrearClaveViewModel
    {
        [Display(Name = "Nombre Identificativo", Description = "Un nombre identificativo para el par de claves a generar")]
        public string NombreIdentificativo { get; set; }

        [Display(Name = "Nombre Común", Description = "Nombre de la persona u entidad titular del certificado de clave pública" )]
        public string CommonName { get; set; }

        [Display(Name = "Organización", Description = "")]
        public string Organization { get; set; }

        [Display(Name = "Unidad Organizacional", Description = "")]
        public string OrganizationUnit { get; set; }

        [Display(Name = "Ciudad", Description = "")]
        public string City { get; set; }

        [Display(Name = "Estado", Description = "")]
        public string State { get; set; }

        [Display(Name = "País (2 caracteres)", Description = "")]
        public string CountryIso2Characters { get; set; }

        [Display(Name = "Email", Description = "")]
        public string Email { get; set; }
        
        public string Password { get; set; }
    }

}
