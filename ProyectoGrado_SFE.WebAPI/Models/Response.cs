using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models
{
    [Produces("application/json")]
    public class Response
    {        
        public bool success { get; set; }
        public string message { get; set; }
        
        public Response(bool success, string message) {
            this.success = success;
            this.message = message;
        }

        public Response(bool success)
        {
            this.success = success;
            //this.message = message;
        }
    }
}
