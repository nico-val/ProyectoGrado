using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using System.Security.Claims;
using System.Linq;
using ProyectoGrado_SFE.WebAPI.WebApiJwtAuthDemo.Options;
using ProyectoGrado_SFE.WebAPI.Models;
using ProyectoGrado_SFE.WebAPI.Auth;
using ProyectoGrado_SFE.WebAPI.Models.ViewModels;
using ProyectoGrado_SFE.WebAPI.Helpers;
using Microsoft.AspNetCore.Authorization;

namespace ProyectoGrado_SFE.WebAPI.Controllers
{

    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IJwtFactory _jwtFactory;
        private readonly JsonSerializerSettings _serializerSettings;
        private readonly JwtIssuerOptions _jwtOptions;

        public AuthController(UserManager<ApplicationUser> userManager, IJwtFactory jwtFactory, IOptions<JwtIssuerOptions> jwtOptions)
        {
            _userManager = userManager;
            _jwtFactory = jwtFactory;
            _jwtOptions = jwtOptions.Value;

            _serializerSettings = new JsonSerializerSettings
            {
                Formatting = Formatting.Indented
            };
        }

        // POST api/auth/login
        [HttpPost("login")]
        [AllowAnonymous]
        public async Task<IActionResult> Post([FromBody]CredentialsViewModel credentials)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var applicationUser = await _userManager.FindByNameAsync(credentials.UserName);
            if (applicationUser == null) return Ok(new { success = false, message = "El usuario ingresado no existe." });

            var checkPassword = await _userManager.CheckPasswordAsync(applicationUser, credentials.Password);
            if (!checkPassword) return Ok(new { success = false, message = "La contraseña ingresada es incorrecta." });

            var identity = await GetClaimsIdentity(applicationUser);

            var twostep_required = (applicationUser.TotpSecret != null);

            if (twostep_required) identity.AddClaim(new Claim("Requires Two-Factor code", "True", ClaimValueTypes.Boolean));

            // Serialize and return the response
            var response = new
            {
                success = true,
                id = identity.Claims.Single(c => c.Type == Helpers.Constants.Strings.JwtClaimIdentifiers.Id).Value,
                username = credentials.UserName,
                role = identity.Claims.Single(c => c.Type == Helpers.Constants.Strings.JwtClaimIdentifiers.Role).Value,
                auth_token = await _jwtFactory.GenerateEncodedToken(credentials.UserName, identity, false),
                twostep_required = twostep_required,
                expires_in = (int)_jwtOptions.ValidFor.TotalSeconds
            };

            var json = JsonConvert.SerializeObject(response, _serializerSettings);
            return new OkObjectResult(json);
        }

        public class TwoFactorAuthenticationViewModel {
            public int code { get; set; }
        }

        [HttpPost("login/2fa")]        
        [AllowAnonymous]
        public async Task<IActionResult> PostTwoStepAuth([FromBody] TwoFactorAuthenticationViewModel model)
        {
            if (User == null) return Unauthorized();

            var userName = _userManager.GetUserName(User);

            if (userName == null) return StatusCode(500);

            var applicationUser = await _userManager.FindByNameAsync(userName);

            var totp = new OneTimePassword(applicationUser.TotpSecret);

            if (totp.IsCodeValid(model.code))
            {

                var identity = await GetClaimsIdentity(applicationUser);

                // Serialize and return the response
                var response = new
                {
                    success = true,
                    id = identity.Claims.Single(c => c.Type == Helpers.Constants.Strings.JwtClaimIdentifiers.Id).Value,
                    username = userName,
                    role = identity.Claims.Single(c => c.Type == Helpers.Constants.Strings.JwtClaimIdentifiers.Role).Value,
                    auth_token = await _jwtFactory.GenerateEncodedToken(userName, identity, true),
                    expires_in = (int)_jwtOptions.ValidFor.TotalSeconds
                };

                return Ok(response);
            }

            else return Ok(new Response(false,"El código ingresado es incorrecto."));
        }

        private async Task<ClaimsIdentity> GetClaimsIdentity(ApplicationUser applicationUser)
        {
            var roles = await _userManager.GetRolesAsync(applicationUser);
            return await Task.FromResult(_jwtFactory.GenerateClaimsIdentity(applicationUser.UserName, applicationUser.Id, new System.Collections.Generic.List<string>(roles)));
        }
    }
}
