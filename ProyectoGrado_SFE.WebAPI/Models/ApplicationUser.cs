using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string DisplayName { get; set; }
        public string TotpSecret { get; set; }
        public virtual ICollection<Clave> Claves { get; set; }
        public virtual ICollection<FirmaElectronica> FirmasElectronicas { get; set; }
        public string DatosSeguridad { get; set; }
    }
}
