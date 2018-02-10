using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models
{
    public class FirmaElectronica
    {
        [Key]
        public int FirmaId { get; set; }
        public virtual ApplicationUser ApplicationUser { get; set; }
        public virtual Clave Clave { get; set; }
        public string NombreArchivo { get; set; }
        public double TamanoArchivo { get; set; }
        public string Hash { get; set; }
        public DateTime FechaGeneracion { get; set; }
        public byte[] Firma { get; set; }
    }
}
