using LibreriaCriptografica;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProyectoGrado_SFE.WebAPI.Data;
using ProyectoGrado_SFE.WebAPI.Helpers;
using ProyectoGrado_SFE.WebAPI.Models;
using ProyectoGrado_SFE.WebAPI.Models.ManageViewModels;
using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Controllers
{
    [Route("api/PanelControl")]
    public class PanelControlController : Controller
    {

        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _context;

        public PanelControlController(
          UserManager<ApplicationUser> userManager,
          SignInManager<ApplicationUser> signInManager,
          ILoggerFactory loggerFactory,
          ApplicationDbContext context)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = loggerFactory.CreateLogger<PanelControlController>();
            _context = context;
        }

        [Authorize]
        [HttpPost("CambiarPassword")]
        public async Task<IActionResult> ChangePassword([FromBody]ChangePasswordViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return StatusCode(400);
            }
            var user = await GetCurrentUserAsync();
            if (user != null)
            {
                var result = await _userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);
                if (result.Succeeded)
                {                    
                    _logger.LogInformation(3, "User changed their password successfully.");

                    if (user.DatosSeguridad == null)
                    {
                        //El usuario no posería correctamente configurados los datos de seguridad para la clave privada. Creamos uno nuevo.
                        var securityData = SecurityData.CrearNuevo(model.NewPassword);
                        user.DatosSeguridad = securityData.SecurityString;
                    }
                    else {
                        var securityData = new SecurityData(user.DatosSeguridad);
                        securityData.PasswordChange(model.OldPassword, model.NewPassword);
                        user.DatosSeguridad = securityData.SecurityString;
                    }

                    await _userManager.UpdateAsync(user);

                    return Ok(new { success = true,  message = ManageMessageId.ChangePasswordSuccess });
                }
                return Ok(new Response (false, result.Errors.Select(e => e.Description).Aggregate((current, next) => current + " " + next)));
            }
            return Ok(new Response(false, ManageMessageId.Error.ToString() ));
        }
        
        private Task<ApplicationUser> GetCurrentUserAsync()
        {
            return _userManager.GetUserAsync(HttpContext.User);
        }

        public enum ManageMessageId
        {
            AddPhoneSuccess,
            AddLoginSuccess,
            ChangePasswordSuccess,
            SetTwoFactorSuccess,
            SetPasswordSuccess,
            RemoveLoginSuccess,
            RemovePhoneSuccess,
            Error
        }


        [HttpGet("nuevoSecretoTotp")]
        [Authorize]
        public IActionResult nuevoSecretoTotp()
        {
            var totp = new OneTimePassword();
            return Ok(new { secret = totp.GetBase32Secret() });
        }


        public class NuevoSecretoTotpViewModel {
            public string secret { get; set; }
            public int code { get; set; }
        }

        [HttpPost("nuevoSecretoTotp")]
        [Authorize]
        public async Task<IActionResult> postNuevoSecretoTotpAsync([FromBody] NuevoSecretoTotpViewModel model)
        {
            var totp = new OneTimePassword(model.secret);
            var user = await GetCurrentUserAsync();

            if (totp.IsCodeValid(model.code))
            {
                user.TotpSecret = totp.GetBase32Secret();
                var result = await _userManager.UpdateAsync(user);
                if (result.Succeeded) return Ok(new { success = true });
            }

            return Ok(new { success = false });


            
        }

        [HttpPost("migrarClaves")]
        [Authorize]
        public async Task<IActionResult> migracionClaves([FromBody] string password) {

            //var currentUser = await _userManager.GetUserAsync(User);
            var currentUser = _context.Users.Include(u => u.Claves).First(u => u.UserName == User.Identity.Name);
            if (!await _userManager.CheckPasswordAsync(currentUser, password)) return Ok(new Response(false));

            var securityData = new SecurityData(currentUser.DatosSeguridad);
            var rng = System.Security.Cryptography.RandomNumberGenerator.Create();
            
            foreach (var clave in currentUser.Claves) {
                var iv = new byte[16];
                rng.GetBytes(iv);

                var encPrivKey = securityData.Encrypt(clave.PrivateKey_ByteArray, password, iv);

                clave.EncPrivKey = Convert.ToBase64String(encPrivKey) + "|" + Convert.ToBase64String(iv);
            }
            _context.SaveChanges();
            return Ok(new Response(true));
        }

    }
}
