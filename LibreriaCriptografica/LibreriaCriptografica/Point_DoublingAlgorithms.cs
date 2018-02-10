using System.Numerics;

namespace LibreriaCriptografica
{
    partial class Punto
    {        
        public static Punto Jacobian_PointDoubling(Punto P)
        {
            if (P.EsInfinito) return Punto.Infinito;
            BigInteger T1 = 3 * BigInteger.Pow(P.X, 2) + Params.a * BigInteger.Pow(P.Z, 4);
            BigInteger T2 = P.X * BigInteger.Pow(P.Y, 2);
            BigInteger T3 = 4 * T2;
            BigInteger X3 = Arithmetic.Mod(BigInteger.Pow(T1, 2) - 2 * T3, Params.p);
            BigInteger Y3 = Arithmetic.Mod((T1) * (T3 - X3) - 8 * BigInteger.Pow(P.Y, 4), Params.p);
            BigInteger Z3 = Arithmetic.Mod(2 * P.Y * P.Z, Params.p);
            return new Punto() { X = X3, Y = Y3, Z = Z3 };
        }

        public static Punto dbl_2005_dl(Punto P)
        {
            if (P.EsInfinito) return Punto.Infinito;
            BigInteger XX = 0, YY = 0, YYYY, ZZ, S, M, T, X3, Y3, Z3;
            XX = BigInteger.Pow(P.X, 2);
            YY = BigInteger.Pow(P.Y, 2);
            YYYY = BigInteger.Pow(YY, 2);
            ZZ = BigInteger.Pow(P.Z, 2);
            S = 2 * (BigInteger.Pow(P.X + YY, 2) - XX - YYYY);
            M = 3 * XX + Params.a * BigInteger.Pow(ZZ, 2);
            T = BigInteger.Pow(M, 2) - 2 * S;
            X3 = T;
            Y3 = M * (S - T) - 8 * YYYY;
            Z3 = BigInteger.Pow(P.Y + P.Z, 2) - YY - ZZ;
            return new Punto() { X = Arithmetic.Mod(X3, Params.p), Y = Arithmetic.Mod(Y3, Params.p), Z = Arithmetic.Mod(Z3, Params.p) };
        }
    }
}
