using System.Numerics;

namespace LibreriaCriptografica
{
    partial class Punto
    {        

        public static Punto operator *(Punto P, BigInteger k) => k*P;        
        public static Punto operator *(BigInteger k, Punto P) {
            if (k == 2) {
                return P + P;
            }
            return BinaryNAFPointMultiplication(k, P);
        }

        public static Punto operator +(Punto P, Punto Q) {
            if (P.X == Q.X && P.Y == Q.Y && P.Z == Q.Z) {
                return Jacobian_PointDoubling(P);
            }
            else if (P.Z == Q.Z) return Zadd_2007_m(P, Q);
            else {
                return Bernstein_Lange_11M_5S_Addition(P, Q);
            }
        }

        public static Punto operator -(Punto P, Punto Q)
        {
            return P + Q.Negar;
        }
    }
}
