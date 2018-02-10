using LibreriaCriptografica;
using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Asn1.Pkcs;
using Org.BouncyCastle.Asn1.X509;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto;
using Org.BouncyCastle.Crypto.Encodings;
using Org.BouncyCastle.Crypto.Engines;
using Org.BouncyCastle.Crypto.Generators;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.OpenSsl;
using Org.BouncyCastle.Pkcs;
using Org.BouncyCastle.Security;
using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Numerics;
using System.Security.Cryptography;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Security.Cryptography.Pkcs;
using Org.BouncyCastle.Cms;
using System.Diagnostics;
using System.Threading;

namespace ConsoleApp1
{
    class Program
    {
        private static void getKeyAndIVFromPasswordAndSalt(string password, byte[] salt, SymmetricAlgorithm symmetricAlgorithm, ref byte[] key, ref byte[] iv)
        {
            Rfc2898DeriveBytes rfc2898DeriveBytes = new Rfc2898DeriveBytes(password, salt);
            key = rfc2898DeriveBytes.GetBytes(symmetricAlgorithm.KeySize / 8);
            iv = rfc2898DeriveBytes.GetBytes(symmetricAlgorithm.BlockSize / 8);
        }

        private static byte[] encrypt(byte[] unencryptedBytes, string password, int keySize)
        {
            var aesEncryption = Aes.Create();
            //RijndaelManaged aesEncryption = new RijndaelManaged();
            aesEncryption.KeySize = keySize;
            aesEncryption.BlockSize = 128;
            byte[] key = new byte[keySize];
            byte[] iv = new byte[128];
            getKeyAndIVFromPasswordAndSalt(password, Encoding.ASCII.GetBytes("$391Ge3%£2gfR"), aesEncryption, ref key, ref iv);
            aesEncryption.Key = key;
            aesEncryption.IV = iv;
            Console.WriteLine("iv: {0}", Convert.ToBase64String(aesEncryption.IV));
            Console.WriteLine("key: {0}", Convert.ToBase64String(aesEncryption.Key));
            ICryptoTransform crypto = aesEncryption.CreateEncryptor();
            // The result of the encryption and decryption            
            return crypto.TransformFinalBlock(unencryptedBytes, 0, unencryptedBytes.Length);
        }

        private static byte[] decrypt(byte[] encryptedBytes, string password, int keySize)
        {
            var aesEncryption = Aes.Create();
            //RijndaelManaged aesEncryption = new RijndaelManaged();
            aesEncryption.KeySize = keySize;
            aesEncryption.BlockSize = 128;
            byte[] key = new byte[keySize];
            byte[] iv = new byte[128];
            getKeyAndIVFromPasswordAndSalt(password, Encoding.ASCII.GetBytes("$391Ge3%£2gfR"), aesEncryption, ref key, ref iv);
            aesEncryption.Key = key;
            aesEncryption.IV = iv;
            Console.WriteLine("iv: {0}", Convert.ToBase64String(aesEncryption.IV));
            Console.WriteLine("key: {0}", Convert.ToBase64String(aesEncryption.Key));
            ICryptoTransform crypto = aesEncryption.CreateDecryptor();
            // The result of the encryption and decryption            
            return crypto.TransformFinalBlock(encryptedBytes, 0, encryptedBytes.Length);
        }




        static void Main(string[] args)
        {


            var password = "Qwe!23";
            var securityData = SecurityData.CrearNuevo(password);


            var plainText = "Testing this thing out. Will it work? Will it not? More on this on the next episode. Stay tuned!";

            var iv = new byte[16];

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(iv);
            }


            var newPassword = "Qwee!233";

            var encryptedData = securityData.Encrypt(Encoding.UTF8.GetBytes(plainText), password, iv);

            Console.WriteLine("encryptedData: " + Convert.ToBase64String(encryptedData));
            securityData.PasswordChange(password, newPassword);

            var decryptedData = securityData.Decrypt(encryptedData, newPassword, iv);


            Console.WriteLine("decryptedData = " + Encoding.UTF8.GetString(decryptedData));

        }
    }    
}