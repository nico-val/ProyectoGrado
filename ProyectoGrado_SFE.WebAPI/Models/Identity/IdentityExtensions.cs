using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using ProyectoGrado_SFE.WebAPI.Data;

namespace ProyectoGrado_SFE.WebAPI.Models.Identity
{
    public static class IdentityExtensions
    {
        public class User {
            public string Email;
            public string Password;
            public string Role;
        }

        

        public static List<User> DefaultUsers = new List<User>() {
            new User(){ Email = "nicolas_valenzuela@hotmail.com", Password = "Qwe!23", Role = "Usuario"},
            new User(){ Email = "autoridad_registro@prueba.com", Password = "Qwe!23", Role = "AutoridadDeRegistro"},
            new User(){ Email = "autoridad_certificante@prueba.com", Password = "Qwe!23", Role = "AutoridadCertificante"},
            new User(){ Email = "administrador@prueba.com", Password = "Qwe!23", Role = "Administrador"}
        };

        public static async void Assertions(this IApplicationBuilder app) {
            EnsureUsersCreated(app);
            EnsureRolesCreated(app);
            EnsureRolesAssignedAsync(app);
        }

        public static async void EnsureUsersCreated(IApplicationBuilder app) {
            var _userManager = app.ApplicationServices.GetService<UserManager<ApplicationUser>>();

            foreach (var user in IdentityExtensions.DefaultUsers)
            {
                var applicationUser = await _userManager.FindByNameAsync(user.Email);
                if (applicationUser == null)
                {
                    var newApplicationUser = new ApplicationUser { UserName = user.Email, Email = user.Email };
                    var result = await _userManager.CreateAsync(newApplicationUser, user.Password);
                    //if (result.Succeeded) _logger.LogInformation(3, "User created a new account with password.");                
                }
            }
        }

        public static async void EnsureRolesCreated(IApplicationBuilder app)
        {            
            

            var context = app.ApplicationServices.GetService<ApplicationDbContext>();
            if (context.AllMigrationsApplied())
            {
                var roleManager = app.ApplicationServices.GetService<RoleManager<IdentityRole>>();                
                foreach (var role in Roles.All)
                {
                    if (!roleManager.RoleExistsAsync(role.ToUpper()).Result)
                    {
                        await roleManager.CreateAsync(new IdentityRole { Name = role });
                    }
                }
            }
        }

        public static async void EnsureRolesAssignedAsync(IApplicationBuilder app)
        {
            var context = app.ApplicationServices.GetService<ApplicationDbContext>();
            if (context.AllMigrationsApplied())
            {
                var roleManager = app.ApplicationServices.GetService<RoleManager<IdentityRole>>();

                foreach (var user in IdentityExtensions.DefaultUsers)
                    await AssignRoles(app.ApplicationServices, user.Email, new string[] { user.Role });
            }
        }

        public static async Task<IdentityResult> AssignRoles(IServiceProvider services, string email, string[] roles)
        {
            UserManager<ApplicationUser> _userManager = services.GetService<UserManager<ApplicationUser>>();
            ApplicationUser user = await _userManager.FindByEmailAsync(email);
            var result = await _userManager.AddToRolesAsync(user, roles);

            return result;
        }
    }
}
