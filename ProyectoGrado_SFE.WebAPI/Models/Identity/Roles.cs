using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models.Identity
{
    public static class Roles
    {
        private static readonly string[] roles = { "Usuario", "Administrador", "AutoridadCertificante", "AutoridadDeRegistro"};

        public static string Admin { get { return roles[1]; } }

        public static IEnumerable<string> All { get { return roles; } }
    }
}
