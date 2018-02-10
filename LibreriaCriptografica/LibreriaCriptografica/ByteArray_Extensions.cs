using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace LibreriaCriptografica
{
    public static class ByteArray_Extensions
    {
        public static string ToHexString(this byte[] ba)
        {
            string hex = BitConverter.ToString(ba.Reverse().ToArray());
            return hex.Replace("-", "");
        }

        public static string ToHexString_LittleEndian(this byte[] ba)
        {
            string hex = BitConverter.ToString(ba.ToArray());
            return hex.Replace("-", "");

        }
    }
}