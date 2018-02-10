using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Globalization;
using System.IO;
using System.Numerics;
using System.Security.Cryptography;
using System.Text;
using System.Text.RegularExpressions;

namespace LibreriaCriptografica
{
    public static class Helper
    {       
        public static BigInteger Random(BigInteger n)
        {

            Random random = new System.Random();
            var randomData = n.ToByteArray();

            BigInteger max = BigInteger.Pow(256, randomData.Length) - 1;

            random.NextBytes(randomData);

            byte[] unsignedRandomData = new byte[randomData.Length + 1];
            Array.Copy(randomData, unsignedRandomData, randomData.Length);
            unsignedRandomData[unsignedRandomData.Length - 1] = 0x0;

            var randomBigInteger = new BigInteger(unsignedRandomData);

            return randomBigInteger * n / max;

        }       
        
        public static BigInteger ParseHexToPositiveBigInteger(String str)
        {
            return BigInteger.Parse("00000000" + Regex.Replace(str, @"\s+", ""), NumberStyles.AllowHexSpecifier); ;
        }

        //public static string EncryptString(string text, string keyString)
        //{
        //    var key = Encoding.UTF8.GetBytes(keyString);

        //    using (var aesAlg = Aes.Create())
        //    {
        //        using (var encryptor = aesAlg.CreateEncryptor(key, aesAlg.IV))
        //        {
        //            using (var msEncrypt = new MemoryStream())
        //            {
        //                using (var csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
        //                using (var swEncrypt = new StreamWriter(csEncrypt))
        //                {
        //                    swEncrypt.Write(text);
        //                }

        //                var iv = aesAlg.IV;

        //                var decryptedContent = msEncrypt.ToArray();

        //                var result = new byte[iv.Length + decryptedContent.Length];

        //                Buffer.BlockCopy(iv, 0, result, 0, iv.Length);
        //                Buffer.BlockCopy(decryptedContent, 0, result, iv.Length, decryptedContent.Length);

        //                return Convert.ToBase64String(result);
        //            }
        //        }
        //    }
        //}

        //public static string DecryptString(string cipherText, string keyString)
        //{
        //    var fullCipher = Convert.FromBase64String(cipherText);

        //    var iv = new byte[16];
        //    var cipher = new byte[16];

        //    Buffer.BlockCopy(fullCipher, 0, iv, 0, iv.Length);
        //    Buffer.BlockCopy(fullCipher, iv.Length, cipher, 0, iv.Length);
        //    var key = Encoding.UTF8.GetBytes(keyString);

        //    using (var aesAlg = Aes.Create())
        //    {
        //        using (var decryptor = aesAlg.CreateDecryptor(key, iv))
        //        {
        //            string result;
        //            using (var msDecrypt = new MemoryStream(cipher))
        //            {
        //                using (var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
        //                {
        //                    using (var srDecrypt = new StreamReader(csDecrypt))
        //                    {
        //                        result = srDecrypt.ReadToEnd();
        //                    }
        //                }
        //            }

        //            return result;
        //        }
        //    }
        //}


        //private static string Decrypt(string dataToDecrypt, string password, string salt)
        //{
        //    //AesManaged aes = null;
        //    var aes = Aes.Create();

        //    MemoryStream memoryStream = null;

        //    try
        //    {
        //        //Generate a Key based on a Password and HMACSHA1 pseudo-random number generator

        //        Rfc2898DeriveBytes rfc2898 = new Rfc2898DeriveBytes(password, Encoding.UTF8.GetBytes(salt), 10000);


        //        //Create AES algorithm
        //        //aes = new AesManaged();
        //        aes.KeySize = aes.LegalKeySizes[0].MaxSize;        // returns 256
        //        aes.BlockSize = aes.LegalBlockSizes[0].MaxSize;    // return 128

        //        aes.Key = rfc2898.GetBytes(aes.KeySize);


        //        aes.IV = rfc2898.GetBytes(aes.BlockSize);

        //        //Create Memory and Crypto Streams
        //        memoryStream = new MemoryStream();
        //        CryptoStream cryptoStream = new CryptoStream(memoryStream, aes.CreateDecryptor(), CryptoStreamMode.Write);

        //        //Decrypt Data
        //        byte[] data = Convert.FromBase64String(dataToDecrypt);
        //        cryptoStream.Write(data, 0, data.Length);
        //        cryptoStream.FlushFinalBlock();

        //        //Return Decrypted String
        //        byte[] decryptBytes = memoryStream.ToArray();


        //        //Dispose
        //        if (cryptoStream != null)
        //            cryptoStream.Dispose();

        //        //Retval
        //        return Encoding.UTF8.GetString(decryptBytes, 0, decryptBytes.Length);
        //    }
        //    catch (Exception ex)
        //    {
        //        MasterData.CryptographyExceptionOccured = true;
        //        Debug.WriteLine(ex.Message);
        //        Debug.WriteLine(ex.StackTrace);
        //        return "";
        //    }


        //    finally
        //    {
        //        if (memoryStream != null)
        //            memoryStream.Dispose();

        //        if (aes != null)
        //            aes.Clear();
        //    }
        //}
    }
}
