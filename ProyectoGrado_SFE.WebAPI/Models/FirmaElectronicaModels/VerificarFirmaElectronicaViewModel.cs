using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models.FirmaElectronicaViewModels
{
    public class VerificarFirmaElectronicaViewModel
    {
        public IFormFile Archivo { get; set; }
        public IFormFile ArchivoFirmaElectronica { get; set; }
    }

    public class VerificarFirmaElectronicaResultViewModel
    {
        public bool Result { get; set; }
        public CertificateSubjectViewModel Subject { get; set; }
        public string FileName { get; set; }
        public double FileSize { get; set; }
        public string FileHash { get; set; }
    }

    public class CertificateSubjectViewModel
    {                
        public string CN { get; set; }
        public string OU { get; set; }        
        public string O { get; set; }
        public string S { get; set; }
        public string C { get; set; }
    }
}
