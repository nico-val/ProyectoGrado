using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Numerics;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Models
{
    public class Clave
    {
        [Key]
        public int ClaveId { get; set; }

        [JsonIgnore]
        public virtual ApplicationUser ApplicationUser { get; set; }

        [Display(Name = "Nombre identificativo")]
        public string NombreIdentificativo { get; set; }

        [JsonIgnore]
        public string EncPrivKey { get; set; }

        [JsonIgnore]
        [Display(Name = "Clave Pública")]
        public string PublicKey { get; set; }

        public string FormattedPublicKey {
            get {
                var formattedPublicKey = this.PublicKey;

                var preambleSize = 2;
                var blockSize = 8;
                var separatingCharacter = " ";

                formattedPublicKey = formattedPublicKey.Insert(preambleSize, separatingCharacter);

                for (int i = preambleSize + blockSize + separatingCharacter.Length; i < formattedPublicKey.Length; i = i + blockSize + separatingCharacter.Length)
                    formattedPublicKey = formattedPublicKey.Insert(i, separatingCharacter);


                return formattedPublicKey;
            }
        }

        [JsonIgnore]
        public byte[] Certificado { get; set; }

        [JsonIgnore]
        public byte[] CSR { get; set; }

        [Display(Name = "Válido hasta")]
        public DateTime? FechaValidez { get; set; }

        [Display(Name = "País")]
        public string Pais { get; set; }

        [Display(Name = "Provincia")]
        public string EstadoOProvincia { get; set; }

        [Display(Name = "Localidad")]
        public string Localidad { get; set; }

        [Display(Name = "Organización")]
        public string Organizacion { get; set; }

        [Display(Name = "Unidad organizacional")]
        public string UnidadOrganizacional { get; set; }

        [Display(Name = "Nombre común")]
        public string NombreComun { get; set; }

        [Display(Name = "Email")]
        public string Email { get; set; }

        public bool TieneCertificado {
            get {
                if (Certificado != null)
                    return true;
                else return false;
            }
        }

        [Display(Name = "Fecha de creación")]
        public DateTime FechaCreacion { get; set; }


        [Display(Name = "Estado de verificación")]
        public string EstadoVerificacion { get; set; }

        [Display(Name = "Fecha de verificación")]
        public DateTime? FechaVerificacion { get; set; }

        [Display(Name = "Usuario de Entidad de Registro verificador")]
        public string UsuarioVerificador { get; set; }

        [Display(Name = "Notas de la verificacion")]
        public string MensajeVerificacion { get; set; }

        [Display(Name = "Usuario de certificación")]
        public string UsuarioCertificador { get; set; }

        [Display(Name = "Fecha de certificación")]
        public DateTime? FechaCertificacion { get; set; }


        [JsonIgnore]
        public byte[] PublicKey_ByteArray { get {
                return Enumerable.Range(0, PublicKey.Length)
                     .Where(x => x % 2 == 0)
                     .Select(x => Convert.ToByte(PublicKey.Substring(x, 2), 16))
                     .ToArray();
            } }

        [JsonIgnore]
        public byte[] PrivateKey_ByteArray
        {
            get
            {
                return Enumerable.Range(0, EncPrivKey.Length)
                     .Where(x => x % 2 == 0)
                     .Select(x => Convert.ToByte(EncPrivKey.Substring(x, 2), 16))
                     .Reverse().ToArray();
            }
        }
        /*
        public BigInteger PrivateKey_BigInteger
        {
            get
            {
                return new BigInteger(PrivateKey_ByteArray);
            }
        }*/
    }
}
