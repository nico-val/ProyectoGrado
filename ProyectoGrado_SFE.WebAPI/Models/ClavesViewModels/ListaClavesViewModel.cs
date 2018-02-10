using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models.ClavesViewModels
{
    public class ListaClavesViewModel
    {
        public IEnumerable<ClaveViewModel> ClavesCertificadas;
        public IEnumerable<ClaveViewModel> ClavesPendientes;
    }

    public class ClaveViewModel {
        public int Id;
        public string NombreIdentificativo;

        public string FormattedPublicKey;

        public DateTime? FechaValidez;
    }
}