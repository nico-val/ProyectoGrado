using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Helpers
{
    public static class Constants
    {
        public static class Strings
        {
            public static class JwtClaimIdentifiers
            {
                public const string Role = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role", Id = "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier";
            }

            public static class JwtClaims
            {
                public const string ApiAccess = "api_access";
            }
        }
    }
}
