using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Threading.Tasks;
using System.Security.Claims;

namespace ProyectoGrado_SFE.WebAPI.Auth
{
    public interface IJwtFactory
    {
        Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity, bool twoStepConfirmed);
        ClaimsIdentity GenerateClaimsIdentity(string userName, string id, List<string> roles);
    }
}