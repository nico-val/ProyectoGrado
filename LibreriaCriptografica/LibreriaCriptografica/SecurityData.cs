using System;
using System.Linq;
using System.Security.Cryptography;

namespace LibreriaCriptografica
{
    public class SecurityData
    {
        /// <summary>
        /// Tamaño de clave a emplear para encriptación AES (256 bits)
        /// </summary>
        public const int keySize = 256;

        /// <summary>
        /// Tamaño del Vector de Inicialización para AES (IV 128 bits). Debe ser del mismo tamaño que el Block Size de AES, para el modo CBC.
        /// </summary>
        public const int ivSize = 128;

        /// <summary>
        /// Tamaño del Salt para la derivación del password.
        /// </summary>
        public const int saltSize = 128;

        /// <summary>
        /// Método para crear un nuevo conjunto de datos de seguridad, empleando la password provista.
        /// </summary>
        /// <param name="password"></param>
        /// <returns>Nuevo SecurityData</returns>
        public static SecurityData CrearNuevo(string password)
        {
            using (var rand = RandomNumberGenerator.Create())
            {
                byte[] k1 = new byte[keySize / 8];
                rand.GetBytes(k1);
                Console.WriteLine("k1 = " + Convert.ToBase64String(k1));
                return GenerateValues(k1, password);
            }
        }


        private static SecurityData GenerateValues(byte[] k1, string password)
        {

            var rand = RandomNumberGenerator.Create();

            byte[] ivBytes = new byte[ivSize / 8];
            rand.GetBytes(ivBytes);

            byte[] saltBytes = new byte[saltSize / 8];
            rand.GetBytes(saltBytes);

            Rfc2898DeriveBytes rfc2898DeriveBytes = new Rfc2898DeriveBytes(password, saltBytes);

            var derived = rfc2898DeriveBytes.GetBytes(64);

            var k2 = new byte[32];
            var k3 = new byte[32];
            Array.Copy(derived, 0, k2, 0, 32);
            Array.Copy(derived, 32, k3, 0, 32);

            var aesEncryption = Aes.Create();
            aesEncryption.KeySize = keySize;
            aesEncryption.BlockSize = 128;
            aesEncryption.Key = k2;
            aesEncryption.IV = ivBytes;
            ICryptoTransform crypto = aesEncryption.CreateEncryptor();
            // The result of the encryption and decryption            
            var k1_encrypted = crypto.TransformFinalBlock(k1, 0, k1.Length);

            var securityData = new SecurityData()
            {
                k1_encrypted = k1_encrypted,
                k3 = k1,
                salt = saltBytes,
                iv = ivBytes
            };

            return securityData;
        }

        private SecurityData() { }


        public SecurityData(string securityString)
        {
            var splittedSecurityString = securityString.Split('|');
            this.k1_encrypted = Convert.FromBase64String(splittedSecurityString[0]);
            this.k3 = Convert.FromBase64String(splittedSecurityString[1]);
            this.iv = Convert.FromBase64String(splittedSecurityString[2]);
            this.salt = Convert.FromBase64String(splittedSecurityString[3]);
        }

        public string SecurityString => Convert.ToBase64String(this.k1_encrypted) + "|"
                + Convert.ToBase64String(this.k3) + "|"
                + Convert.ToBase64String(this.iv) + "|"
                + Convert.ToBase64String(this.salt);


        public byte[] k1_encrypted;

        public byte[] k3;

        public byte[] iv;

        public byte[] salt;


        public byte[] Encrypt(byte[] plainData, string password, byte[] iv)
        {
            if (iv.Length != (ivSize / 8)) throw new ArgumentException("IV debería ser de 128 bits.");

            var k2_retrieved = new byte[keySize / 8];
            var k3_retrieved = new byte[keySize / 8];
            var k1 = new byte[keySize / 8];

            using (Rfc2898DeriveBytes rfc2898DeriveBytes = new Rfc2898DeriveBytes(password, this.salt))
            {
                var derived = rfc2898DeriveBytes.GetBytes(keySize * 2 / 8);
                Array.Copy(derived, 0, k2_retrieved, 0, keySize / 8);
                Array.Copy(derived, keySize / 8, k3_retrieved, 0, keySize / 8);
            }

            //Comparamos las secuencias K3, para corroborar que la contraseña ingresada es correcta.
            if (this.k3.Count() != k3_retrieved.Count() && this.k3.Intersect(k3_retrieved).Count() != this.k3.Count()) throw new Exception();

            using (var aesEncryption = Aes.Create())
            {
                aesEncryption.KeySize = SecurityData.keySize;
                aesEncryption.BlockSize = 128;
                aesEncryption.Key = k2_retrieved;
                aesEncryption.IV = this.iv;
                ICryptoTransform crypto = aesEncryption.CreateDecryptor();
                // The result of the encryption and decryption            
                k1 = crypto.TransformFinalBlock(this.k1_encrypted, 0, this.k1_encrypted.Length);
            }

            using (var aesEncryption_forText = Aes.Create())
            {
                aesEncryption_forText.KeySize = SecurityData.keySize;
                aesEncryption_forText.BlockSize = 128;
                aesEncryption_forText.Key = k1;
                aesEncryption_forText.IV = iv;
                ICryptoTransform crypto_forText = aesEncryption_forText.CreateEncryptor();
                //El resultado de la encriptación
                var encryptedText = crypto_forText.TransformFinalBlock(plainData, 0, plainData.Length);

                return encryptedText;
            }
        }

        public byte[] Decrypt(byte[] encryptedData, string password, byte[] iv)
        {
            if (iv.Length != (ivSize / 8)) throw new ArgumentException("IV debería ser de 128 bits.");

            var k2_retrieved = new byte[keySize / 8];
            var k3_retrieved = new byte[keySize / 8];
            var k1 = new byte[keySize / 8];

            using (Rfc2898DeriveBytes rfc2898DeriveBytes = new Rfc2898DeriveBytes(password, this.salt))
            {
                var derived = rfc2898DeriveBytes.GetBytes(keySize * 2 / 8);
                Array.Copy(derived, 0, k2_retrieved, 0, keySize / 8);
                Array.Copy(derived, keySize / 8, k3_retrieved, 0, keySize / 8);
            }

            //Comparamos las secuencias K3, para corroborar que la contraseña ingresada es correcta.
            if (this.k3.Count() != k3_retrieved.Count() && this.k3.Intersect(k3_retrieved).Count() != this.k3.Count()) throw new Exception();

            using (var aesEncryption = Aes.Create())
            {
                aesEncryption.KeySize = SecurityData.keySize;
                aesEncryption.BlockSize = 128;
                
                aesEncryption.Key = k2_retrieved;
                aesEncryption.IV = this.iv;
                ICryptoTransform crypto = aesEncryption.CreateDecryptor();
                //Resultado de desencriptación
                k1 = crypto.TransformFinalBlock(this.k1_encrypted, 0, this.k1_encrypted.Length);
            }

            using (var aesEncryption_forText = Aes.Create())
            {

                aesEncryption_forText.KeySize = SecurityData.keySize;
                aesEncryption_forText.BlockSize = 128;
                aesEncryption_forText.Key = k1;
                aesEncryption_forText.IV = iv;
                ICryptoTransform crypto_forText = aesEncryption_forText.CreateDecryptor();
                //Resultado de desencriptación
                var decryptedText = crypto_forText.TransformFinalBlock(encryptedData, 0, encryptedData.Length);
                //Console.WriteLine("decryptedData = " + Convert.ToBase64String(encryptedText));

                return decryptedText;
            }
        }

        public void PasswordChange(string oldPassword, string newPassword)
        {
            var k2_retrieved = new byte[keySize / 8];
            var k3_retrieved = new byte[keySize / 8];
            var k1 = new byte[keySize / 8];

            using (Rfc2898DeriveBytes rfc2898DeriveBytes = new Rfc2898DeriveBytes(oldPassword, this.salt))
            {
                var derived = rfc2898DeriveBytes.GetBytes(keySize * 2 / 8);
                Array.Copy(derived, 0, k2_retrieved, 0, keySize / 8);
                Array.Copy(derived, keySize / 8, k3_retrieved, 0, keySize / 8);
            }

            //Comparamos las secuencias K3, para corroborar que la contraseña ingresada es correcta.
            if (this.k3.Count() != k3_retrieved.Count() && this.k3.Intersect(k3_retrieved).Count() != this.k3.Count()) throw new Exception();

            using (var aesEncryption = Aes.Create())
            {
                aesEncryption.KeySize = SecurityData.keySize;
                aesEncryption.BlockSize = 128;                
                aesEncryption.Key = k2_retrieved;
                aesEncryption.IV = this.iv;
                ICryptoTransform crypto = aesEncryption.CreateDecryptor();

                //Resultado de la desencriptación
                k1 = crypto.TransformFinalBlock(this.k1_encrypted, 0, this.k1_encrypted.Length);
            }

            var newSecurity = GenerateValues(k1, newPassword);

            this.k1_encrypted = newSecurity.k1_encrypted;
            this.k3 = newSecurity.k3;
            this.iv = newSecurity.iv;
            this.salt = newSecurity.salt;
        }
    }
}
