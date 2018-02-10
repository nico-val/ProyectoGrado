using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.Authorization;
using Microsoft.AspNetCore.Authorization;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using ProyectoGrado_SFE.WebAPI.WebApiJwtAuthDemo.Options;
using ProyectoGrado_SFE.WebAPI.Data;
using Microsoft.EntityFrameworkCore;
using ProyectoGrado_SFE.WebAPI.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using FluentValidation.AspNetCore;
using AutoMapper;
using ProyectoGrado_SFE.WebAPI.Auth;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using ProyectoGrado_SFE.WebAPI.Models.Identity;
using ProyectoGrado_SFE.WebAPI.Services;

namespace ProyectoGrado_SFE.WebAPI
{
    public class Startup
    {

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        private const string SecretKey = "needtogetthisfromenvironment";
        private readonly SymmetricSecurityKey _signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(SecretKey));

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<ApplicationDbContext>(options =>
            options.UseMySql(Configuration.GetConnectionString("DataAccessMySqlProvider")
                //,b => b.MigrationsAssembly("DotNetGigs")
                ));


            services.AddSingleton<IJwtFactory, JwtFactory>();

            services.AddOptions();


            // Add framework services.
            services.AddMvc(config =>
            {
            var policy = new AuthorizationPolicyBuilder()
                             .RequireAuthenticatedUser()
                             .RequireAssertion(context => 
                                 !context.User.HasClaim(c => c.Type == "Requires Two-Factor code")
                             )
                             //.RequireClaim("Two-Step Authenticated", "true")                                                          
                             .Build();
                
                config.Filters.Add(new AuthorizeFilter(policy));
            });

            //Use policy auth.
            //services.AddAuthorization(options =>
            //{
            //    options.AddPolicy("Two-Step Not Authenticated",
            //                      policy => policy.RequireAuthenticatedUser().RequireClaim("Two-Step Authenticated", "false"));
            //});

            services.AddIdentity<ApplicationUser, IdentityRole>(s => {
                s.Password.RequireDigit = true;
                s.Password.RequiredLength = 6;
                

            })
                .AddEntityFrameworkStores<ApplicationDbContext>()
                .AddDefaultTokenProviders();


            services.AddMvc().AddFluentValidation(fv => fv.RegisterValidatorsFromAssemblyContaining<Startup>());


            services.AddAutoMapper();

            var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));

            // Configure JwtIssuerOptions
            services.Configure<JwtIssuerOptions>(options =>
            {
                options.Issuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)];
                options.Audience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)];
                options.SigningCredentials = new SigningCredentials(_signingKey, SecurityAlgorithms.HmacSha256);
            });

            //CORS
            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            services.AddTransient<IEmailSender, AuthMessageSender>();
            services.AddTransient<ISmsSender, AuthMessageSender>();



        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();





            var jwtAppSettingOptions = Configuration.GetSection(nameof(JwtIssuerOptions));
            var tokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = jwtAppSettingOptions[nameof(JwtIssuerOptions.Issuer)],

                ValidateAudience = true,
                ValidAudience = jwtAppSettingOptions[nameof(JwtIssuerOptions.Audience)],

                ValidateIssuerSigningKey = true,
                IssuerSigningKey = _signingKey,

                RequireExpirationTime = true,
                ValidateLifetime = true,

                ClockSkew = TimeSpan.Zero
            };

            app.UseJwtBearerAuthentication(new JwtBearerOptions
            {
                AutomaticAuthenticate = true,
                AutomaticChallenge = true,
                TokenValidationParameters = tokenValidationParameters
            });

            //app.Assertions();

            //app.UseRuntimeInfoPage();
            app.UseDefaultFiles();
            app.UseStaticFiles();

            //CORS
            app.UseCors("CorsPolicy");
            app.UseMvc();
        }
    }    
}
