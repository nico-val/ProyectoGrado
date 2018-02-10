using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ProyectoGrado_SFE.Models.AccountViewModels;
using ProyectoGrado_SFE.WebAPI.Data;
using ProyectoGrado_SFE.WebAPI.Models;
using ProyectoGrado_SFE.WebAPI.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Controllers
{
    [Route("api/Usuarios")]
    //[Authorize(Roles = "Administrador")]
    [AllowAnonymous]
    public class UsuariosController: Controller
    {

        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _context;
        private readonly IEmailSender _emailSender;

        public UsuariosController(
          UserManager<ApplicationUser> userManager,
          SignInManager<ApplicationUser> signInManager,
          ILoggerFactory loggerFactory,
          ApplicationDbContext context,
          RoleManager<IdentityRole> roleManager,
          IEmailSender emailSender)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _logger = loggerFactory.CreateLogger<PanelControlController>();
            _context = context;
            _roleManager = roleManager;
        }

        public class UserViewModel {
            public string UserName { get; set; }
            public string Role { get; set; }
        }
        [HttpGet]
        public async Task<IActionResult> Get() {
            var roles = _context.Roles.Select(r => new { RoleId = r.Id, Name = r.Name}).ToList();

            var users = _context.Users.Include(u => u.Roles)
                .Select(u => new UserViewModel()
                {
                    UserName = u.UserName,
                    Role = u.Roles.Count > 0 ? roles.First(r => r.RoleId == u.Roles.First().RoleId).Name : null//.Select(r => _context.Roles.Find(r.RoleId).Name).Aggregate((current,next) => current + ", " + next)// await _userManager.GetRolesAsync(u) //.Result.Aggregate((current, next) => current + ", " + next)
                })
                .ToList();

            return Ok(users);
        }

        //
        // POST: /Account/Register
        [HttpPost]
        public async Task<IActionResult> Register([FromBody]RegisterViewModel model)
        {
            if (ModelState.IsValid)
            {
                var user = new ApplicationUser { UserName = model.Email, Email = model.Email };
                var result = await _userManager.CreateAsync(user);
                
                if (result.Succeeded)
                {
                    // For more information on how to enable account confirmation and password reset please visit https://go.microsoft.com/fwlink/?LinkID=532713
                    // Send an email with this link
                    //var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                    //var callbackUrl = Url.Action(nameof(ConfirmEmail), "Account", new { userId = user.Id, code = code }, protocol: HttpContext.Request.Scheme);
                    //await _emailSender.SendEmailAsync(model.Email, "Confirm your account",
                    //    $"Please confirm your account by clicking this link: <a href='{callbackUrl}'>link</a>");
                    _logger.LogInformation(3, "User created a new account with no password.");

                    var resultRole = await _userManager.AddToRolesAsync(user, new List<string>() { model.Role });

                    var code = await _userManager.GeneratePasswordResetTokenAsync(user);
                    await _emailSender.SendEmailAsync(model.Email, "Generación de contraseña",
                       $"Please reset your password by clicking here: <a href='callbackUrl'>link</a>");

                    return Ok(new Response(true));
                    //return RedirectToLocal(returnUrl);
                }
                return Ok(new Response(false, result.Errors.Select(e => e.Description).Aggregate((current,next) => current + " " + next )));
                //AddErrors(result);
            }

            // If we got this far, something failed, redisplay form
            return View(model);
        }
    }
}
