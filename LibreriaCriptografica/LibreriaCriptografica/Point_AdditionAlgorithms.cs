using System;
using System.Numerics;

namespace LibreriaCriptografica
{
    partial class Punto
    {

        private static Punto GenericAddition(Punto P, Punto Q) {

            if (P.EsCero && !Q.EsCero) return Q;
            if (!P.EsCero && Q.EsCero) return P;
            if (P.EsCero && Q.EsCero) return P;

            if (P.EsInfinito && !Q.EsInfinito) return Q;
            if (!P.EsInfinito && Q.EsInfinito) return P;

            if (P.EsInfinito && Q.EsInfinito) return Punto.Infinito;
            if (P.y == BigInteger.Negate(Q.y)) return Punto.Infinito;

            if (P.x.Sign == -1 || P.y.Sign == -1 || Q.x.Sign == -1 || Q.y.Sign == -1) throw new Exception("Something's wrong with your code dude");

            BigInteger m;

            try
            {
                if (P.x == Q.x && P.y == Q.y) m = Arithmetic.Mod((3 * BigInteger.Pow(P.x, 2) + Params.a) * Arithmetic.Inversion_ExtendedEuclidean(2 * P.y, Params.p), Params.p);
                else m = Arithmetic.Mod(((P.y - Q.y) * Arithmetic.Inversion_ExtendedEuclidean(P.x - Q.x, Params.p)), Params.p);
            }
            catch (Arithmetic.ZeroMultiplicativeInverseException e)
            {
                return new Punto(0, 0);
            }

            BigInteger xr = Arithmetic.Mod(BigInteger.Pow(m, 2) - P.x - Q.x, Params.p);

            BigInteger yr = Arithmetic.Mod(-P.y + m * (P.x - xr), Params.p);

            return new Punto(xr, yr);
        }

        

        private static Punto Zadd_2007_m(Punto P, Punto Q) {
            BigInteger A, B, C, D, X3, Y3, Z3;

            A = BigInteger.Pow(Q.X - P.X, 2);
            B = P.X * A;
            C = Q.X * A;
            D = BigInteger.Pow(Q.Y - P.Y,2);
            X3 = D - B - C;
            Y3 = (Q.Y - P.Y) * (B - X3) - P.Y * (C - B);
            Z3 = P.Z * (Q.X - P.X);

            return new Punto() { X = Arithmetic.Mod(X3, Params.p), Y = Arithmetic.Mod(Y3, Params.p), Z = Arithmetic.Mod(Z3, Params.p) };
        }

        private static Punto Bernstein_Lange_11M_5S_Addition(Punto P, Punto Q) {
            if (Q.EsInfinito || Q.EsCero)
                return P;
            if (P.EsInfinito || P.EsCero)
                return Q;
            if ((P.EsInfinito && Q.EsInfinito))
                return Punto.Infinito;

            if (P.X == Q.X && P.Y == Q.Y && P.Z == Q.Z)
                return dbl_2005_dl(P);
            BigInteger Z1Z1, Z2Z2, U1, U2, S1, S2, H, I, J, r, V, X3, Y3, Z3;
            Z1Z1 = P.Z * P.Z;
            Z2Z2 = Q.Z * Q.Z;
            U1 = P.X * Z2Z2;
            U2 = Q.X * Z1Z1;
            S1 = P.Y * Q.Z * Z2Z2;
            S2 = Q.Y * P.Z * Z1Z1;
            H = U2 - U1;
            I = BigInteger.Pow(2 * H, 2);
            J = H * I;
            r = 2 * (S2 - S1);
            V = U1 * I;
            X3 = BigInteger.Pow(r, 2) - J - 2 * V;
            Y3 = r * (V - X3) - 2 * S1 * J;
            Z3 = (BigInteger.Pow(P.Z + Q.Z, 2) - Z1Z1 - Z2Z2) * H;
            return new Punto() { X = Arithmetic.Mod(X3,Params.p), Y = Arithmetic.Mod(Y3,Params.p), Z = Arithmetic.Mod(Z3,Params.p) };            
        }

        private static Punto AffineJacobian_PointAddition(Punto P, Punto Q) {
            
            if (Q.EsInfinito || Q.EsCero)
                return P;
            if (P.EsInfinito || P.EsCero)
                return Q;
            if ((P.EsInfinito && Q.EsInfinito))
                return Punto.Infinito;
           
            BigInteger  X1 = P.X,                        
                        Y1 = P.Y,
                        Z1 = P.Z,
                        X2 = Q.x,
                        Y2 = Q.y,                        
                        Z2 = 1;

            BigInteger T1 = (Y2 * BigInteger.Pow(Z1, 3) - Y1);
            BigInteger T2 = X2 * BigInteger.Pow(Z1, 2) - X1;
            BigInteger T3 = BigInteger.Pow(T2, 2);
            BigInteger X3 = Arithmetic.Mod(BigInteger.Pow(T1,2) - T3 * (X1 + X2*BigInteger.Pow(Z1,2)),Params.p);
            BigInteger Y3 = Arithmetic.Mod(T1 * (X1 * T3 - X3) - Y1 * BigInteger.Pow(X2 * BigInteger.Pow(Z1, 2) - X1, 3),Params.p);
            BigInteger Z3 = Arithmetic.Mod((T2) * Z1,Params.p);
            return new Punto() { X = X3, Y = Y3, Z = Z3};
        }
    }
}
