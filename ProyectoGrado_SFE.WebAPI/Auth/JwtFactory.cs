using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using ProyectoGrado_SFE.WebAPI.WebApiJwtAuthDemo.Options;
using System.Collections.Generic;
using System.Collections;
using System.Linq;
using System.Collections.Specialized;

namespace ProyectoGrado_SFE.WebAPI.Auth
{
    public class JwtFactory : IJwtFactory
    {
        private readonly JwtIssuerOptions _jwtOptions;

        public JwtFactory(IOptions<JwtIssuerOptions> jwtOptions)
        {
            _jwtOptions = jwtOptions.Value;
            ThrowIfInvalidOptions(_jwtOptions);
        }

        public async Task<string> GenerateEncodedToken(string userName, ClaimsIdentity identity, bool twoStepConfirmed)
        {
            //var claims = new List<Claim>()
            //{

            //    /*
            //     new Claim(JwtRegisteredClaimNames.Sub, userName),
            //     new Claim(JwtRegisteredClaimNames.Jti, await _jwtOptions.JtiGenerator()),
            //     new Claim(JwtRegisteredClaimNames.Iat,
            //     ToUnixEpochDate(_jwtOptions.IssuedAt).ToString(),
            //     ClaimValueTypes.Integer64),
            //     identity.FindFirst(Helpers.Constants.Strings.JwtClaimIdentifiers.Role),
            //     identity.FindFirst(Helpers.Constants.Strings.JwtClaimIdentifiers.Id)*/
            // };

            //claims.AddRange(identity.Claims.Where(c => c.Type == Helpers.Constants.Strings.JwtClaimIdentifiers.Role).ToList());            
            // Create the JWT security token and encode it.

            var jwt = new JwtSecurityToken(
                issuer: _jwtOptions.Issuer,
                audience: _jwtOptions.Audience,
                claims: identity.Claims.ToArray(),
                notBefore: _jwtOptions.NotBefore,
                expires: _jwtOptions.Expiration,
                signingCredentials: _jwtOptions.SigningCredentials);

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }

        public ClaimsIdentity GenerateClaimsIdentity(string userName, string id, List<string> roles)
        {

            var claims = new ClaimsIdentity(new GenericIdentity(userName, "Token"), new[]
            {
                new Claim(Helpers.Constants.Strings.JwtClaimIdentifiers.Id, id),
                //new Claim("http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name", userName),
                new Claim("AspNet.Identity.SecurityStamp", id),
                //new Claim(Helpers.Constants.Strings.JwtClaimIdentifiers.Role, Helpers.Constants.Strings.JwtClaims.ApiAccess)
            });

            //var claims = new ClaimsIdentity(new GenericIdentity(userName, "Token"), new[]
            //{                
            //    new Claim(Helpers.Constants.Strings.JwtClaimIdentifiers.Id, id),
            //    new Claim(Helpers.Constants.Strings.JwtClaimIdentifiers.Role,
            //    Helpers.Constants.Strings.JwtClaims.ApiAccess)
            //});            
            foreach (var role in roles)
            {
                claims.AddClaim(new Claim(Helpers.Constants.Strings.JwtClaimIdentifiers.Role, role));
                //claims.AddClaim(new Claim(Helpers.Constants.Strings.JwtClaimIdentifiers.Role, role));
            }

            return claims;
        }

        /// <returns>Date converted to seconds since Unix epoch (Jan 1, 1970, midnight UTC).</returns>
        private static long ToUnixEpochDate(DateTime date)
          => (long)Math.Round((date.ToUniversalTime() -
                               new DateTimeOffset(1970, 1, 1, 0, 0, 0, TimeSpan.Zero))
                              .TotalSeconds);

        private static void ThrowIfInvalidOptions(JwtIssuerOptions options)
        {
            if (options == null) throw new ArgumentNullException(nameof(options));

            if (options.ValidFor <= TimeSpan.Zero)
            {
                throw new ArgumentException("Must be a non-zero TimeSpan.", nameof(JwtIssuerOptions.ValidFor));
            }

            if (options.SigningCredentials == null)
            {
                throw new ArgumentNullException(nameof(JwtIssuerOptions.SigningCredentials));
            }

            if (options.JtiGenerator == null)
            {
                throw new ArgumentNullException(nameof(JwtIssuerOptions.JtiGenerator));
            }
        }
    }
}





