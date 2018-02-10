using System.Numerics;

namespace LibreriaCriptografica
{
    public class Params {
        public static BigInteger p = Helper.ParseHexToPositiveBigInteger("FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE FFFFFC2F");
        public static BigInteger a = Helper.ParseHexToPositiveBigInteger("00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000000");
        public static BigInteger b = Helper.ParseHexToPositiveBigInteger("00000000 00000000 00000000 00000000 00000000 00000000 00000000 00000007");

        public static BigInteger n = Helper.ParseHexToPositiveBigInteger("FFFFFFFF FFFFFFFF FFFFFFFF FFFFFFFE BAAEDCE6 AF48A03B BFD25E8C D0364141");

        public static Punto G = new Punto(Helper.ParseHexToPositiveBigInteger("79BE667E F9DCBBAC 55A06295 CE870B07 029BFCDB 2DCE28D9 59F2815B 16F81798"),
            Helper.ParseHexToPositiveBigInteger("483ADA77 26A3C465 5DA4FBFC 0E1108A8 FD17B448 A6855419 9C47D08F FB10D4B8")
            );

        public static int bits = 256;
    }
}
