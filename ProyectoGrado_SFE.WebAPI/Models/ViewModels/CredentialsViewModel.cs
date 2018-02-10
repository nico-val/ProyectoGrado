using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FluentValidation.Attributes;
using ProyectoGrado_SFE.WebAPI.Models.ViewModels.Validations;

namespace ProyectoGrado_SFE.WebAPI.Models.ViewModels
{
    [Validator(typeof(CredentialsViewModelValidator))]
    public class CredentialsViewModel
    {
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
