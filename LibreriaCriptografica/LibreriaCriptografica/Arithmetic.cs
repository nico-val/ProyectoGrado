using System;
using System.Numerics;

namespace LibreriaCriptografica
{
    class Arithmetic
    {
        public static BigInteger Mods(BigInteger k, int window)
        {
            BigInteger A_2powWindow = BigInteger.Pow(2, window);
            BigInteger remainder = BigInteger.Remainder(k, A_2powWindow);
            if (remainder >= BigInteger.Pow(2, window - 1))
                return (remainder) - A_2powWindow;
            else return (remainder);
        }

        public static BigInteger Mod(BigInteger n, BigInteger p)
        {
            BigInteger r = n % p;
            if (((p > 0) && (r < 0)) || ((p < 0) && (r > 0))) r += p;
            return r;
        }

        //public static BigInteger BarretReductionAlgorithm(BigInteger x, BigInteger p)
        //{
        //    int b = 10;

        //    int n = p.ToString().Length;

        //    BigInteger mu = DivideAndFloor(BigInteger.Pow(b, 2 * n), p);

        //    var pPrima = DivideAndFloor((DivideAndFloor(x, BigInteger.Pow(b, n - 1))) * mu, BigInteger.Pow(b, n + 1));

        //    var xPrima = BigInteger.Remainder(x, BigInteger.Pow(b, n + 1)) - BigInteger.Remainder(pPrima * p, BigInteger.Pow(b, n + 1));

        //    if (xPrima < 0) xPrima += BigInteger.Pow(b, n + 1);

        //    while (xPrima >= 0)
        //    {
        //        xPrima -= p;
        //        Console.WriteLine(xPrima);
        //    }
        //    return xPrima;
        //}

        //public static BigInteger MultiplicativeInverse(BigInteger e, BigInteger fi)
        //{
        //    double eDouble = (double)e;
        //    double fiDouble = (double)fi;

        //    double result;
        //    int k = 1;

        //    while (true)
        //    {
        //        result = (1 + (k * fiDouble)) / eDouble;
        //        if ((Math.Round(result, 5) % 1) == 0) //integer
        //        {
        //            return (BigInteger)result;
        //        }
        //        else
        //        {
        //            k++;
        //        }
        //    }
        //}

        //public static Tuple<BigInteger, BigInteger, BigInteger> ExtendedEuclideanAlgorithmForIntegers(BigInteger a, BigInteger b)
        //{
        //    BigInteger u = a, v = b;
        //    BigInteger x1 = 1, y1 = 0, x2 = 0, y2 = 1;
        //    BigInteger q, r;
        //    BigInteger d, x, y;

        //    while (u != 0)
        //    {
        //        q = DivideAndFloor(v, u);
        //        r = v - q * u;
        //        x = x2 - q * x1;
        //        y = y2 - q * y1;

        //        v = u;
        //        u = r;
        //        x2 = x1;
        //        x1 = x;
        //        y2 = y1;
        //        y1 = 1;
        //    }

        //    d = v;
        //    x = x2;
        //    y = y2;

        //    Tuple<BigInteger, BigInteger, BigInteger> result = new Tuple<BigInteger, BigInteger, BigInteger>(d, x, y);

        //    return result;
        //}

        public static BigInteger Inversion_ExtendedEuclidean(BigInteger a, BigInteger p)
        {

            if (p < 0) p = -p;
            if (a < 0) a = p - (Arithmetic.Mod(-a, p));

            if (a == 0) throw new ZeroMultiplicativeInverseException();
            BigInteger u = a, v = p;
            BigInteger q, r, x;
            BigInteger x1 = 1, x2 = 0;


            while (u != 1)
            {
                q = DivideAndFloor(v, u);
                r = v - q * u;
                x = x2 - q * x1;
                v = u;
                u = r;
                x2 = x1;
                x1 = x;
            }
            return Arithmetic.Mod(x1, p);
        }

        public static BigInteger DivideAndFloor(BigInteger a, BigInteger b)
        {
            BigInteger result = a / b;
            BigInteger resto = BigInteger.Remainder(a, b);
            if (result.Sign == -1 && resto != 0) return result - 1;
            else return result;
        }

        public class ZeroMultiplicativeInverseException : Exception
        {
        }
    }
}
