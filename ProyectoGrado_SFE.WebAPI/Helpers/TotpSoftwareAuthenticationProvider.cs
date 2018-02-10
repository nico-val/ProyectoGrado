//using Microsoft.AspNetCore.Identity;
//using ProyectoGrado_SFE.WebAPI.Data;
//using ProyectoGrado_SFE.WebAPI.Models;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Threading.Tasks;

//namespace ProyectoGrado_SFE.WebAPI.Helpers
//{
//    public class TotpSoftwareAuthenticationProvider : IUserTwoFactorTokenProvider<ApplicationUser>
//    {
//        public static readonly string ProviderName = "TotpSoftwareAuthenticator";

//        private readonly ApplicationDbContext _context;

//        public TotpSoftwareAuthenticationProvider(ApplicationDbContext context)
//        {
//            _context = context;
//        }

//        public async Task<string> GenerateAsync(string purpose, UserManager<TUser> manager, TUser user)
//        {
//            var userName = await manager.GetUserNameAsync(user);
//            var authenticator = new TotpSoftwareAuthenticator();
//            return authenticator.Generate(userName);
//        }

//        public Task<bool> ValidateAsync(string purpose, string token, UserManager<ApplicationUser> manager, ApplicationUser user)
//        {
//            return Task.Factory.StartNew(() =>
//            {
//                var authenticator = new TotpSoftwareAuthenticator();
//                return authenticator.Authenticate(token);
//            });
//        }

//        public Task<bool> CanGenerateTwoFactorTokenAsync(UserManager<ApplicationUser> manager, ApplicationUser user)
//        {
//            return Task.Factory.StartNew(() =>
//            {
//                var providers = _context.Users.GetTwoFactorProviders(user).ToList();
//                return providers.Contains(TOKEN_PROVIDER_NAME);
//            });
//        }

//        public Task<string> GenerateAsync(string purpose, UserManager<ApplicationUser> manager, ApplicationUser user)
//        {
//            throw new NotImplementedException();
//        }
//    }


//    public interface ITotpSoftwareAuthenticator
//    {
//        bool Authenticate(string token);
//        string Generate(string userName);
//    }

//}
