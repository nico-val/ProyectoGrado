using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;

namespace LibreriaCriptografica
{
    partial class Punto
    {
        public static Punto IterativeMultiplication(BigInteger k, Punto P)
        {
            Punto Q = Punto.Infinito;
            for (int i = 1; i <= k; i++)
            {
                Q += P;
            }
            return Q;
        }

        /// <summary>
        /// Algorithm 3.30: Computing the NAF of a positive integer
        /// </summary>
        /// <param name="k"></param>
        /// <returns></returns>
        public static List<BigInteger> computeNAF(BigInteger k)
        {
            List<BigInteger> NAF = new List<BigInteger>();
            while (k >= 1)
            {
                BigInteger ki = 0;
                if (!k.IsEven)
                {
                    ki = 2 - (Arithmetic.Mod(k, 4));
                    k -= ki;
                }
                NAF.Add(ki);
                k /= 2;
            }
            return NAF;
        }

        /// <summary>
        /// Algorithm 3.31: BInary NAF method for point multiplication
        /// </summary>
        /// <param name="k"></param>
        /// <param name="P"></param>
        /// <returns></returns>
        public static Punto BinaryNAFPointMultiplication(BigInteger k, Punto P)
        {
            var NAF = computeNAF(k);
            Punto Q = Punto.Infinito;
            NAF.Reverse();
            foreach (BigInteger ki in NAF)
            {
                Q = 2*Q;

                if (ki == 1) Q += P;
                else if (ki == -1) Q -= P;
            }
            return Q;
        }

        /// <summary>
        /// Algorithm 3.27: Left-to-right binary method for point multiplication
        /// </summary>
        /// <param name="k"></param>
        /// <param name="P"></param>
        /// <returns></returns>
        public static Punto LeftToRight_BinaryMultiplication(BigInteger k, Punto P) {
            string kBin = k.ToBinaryString();
            Punto Q = Punto.Infinito;
            foreach (char ki in kBin) {
                Q = 2 * Q;
                if (ki == '1') Q = Q + P;
            }
            return Q;
        }

        /// <summary>
        /// Algorithm 3.26: Right-to-left binary method for point multiplication
        /// </summary>
        /// <param name="k"></param>
        /// <param name="P"></param>
        /// <returns></returns>
        public static Punto RightToLeft_BinaryMultiplication(BigInteger k, Punto P)
        {
            string kBin = k.ToBinaryString();
            var rightToLeft = kBin.Reverse();
            Punto Q = Punto.Infinito;
            foreach (char ki in rightToLeft)
            {
                if (ki == '1') Q = Q + P;
                P = 2 * P;                
            }
            return Q;
        }

        /// <summary>
        /// Algorithm 3.35: Computing the width-w NAF of a positive integer
        /// </summary>
        /// <param name="k"></param>
        /// <param name="w"></param>
        /// <returns></returns>
        public static List<BigInteger> compute_wNAF(BigInteger k, int w)
        {
            if (k < 2) throw new Exception("You dumb fuck");

            List<BigInteger> NAF = new List<BigInteger>();

            while (k >= 1)
            {
                if (!k.IsEven)
                {
                    BigInteger ki = Arithmetic.Mods(k, w);
                    k -= ki;
                    NAF.Insert(0, ki);
                }
                else {
                    BigInteger ki = 0;
                    NAF.Insert(0, ki);
                }

                k /= 2;

            }

            return NAF;
        }
        
        /// <summary>
        /// Algorithm 3.36: Window NAF method for point multiplication
        /// </summary>
        /// <param name="k"></param>
        /// <param name="P"></param>
        /// <param name="w"></param>
        /// <returns></returns>
        public static Punto WindowNAFPointMultiplication(BigInteger k, Punto P)
        {

            var wNAF = compute_wNAF(k, WindowNAFPointMultiplication_Precompute.Instance.w);

            Punto Q = Punto.Infinito;            

            foreach (BigInteger ki in wNAF)
            {
                Q = 2 * Q;

                if (ki != 0) {
                    if(ki > 0) Q += WindowNAFPointMultiplication_Precompute.Instance.Pi[ki];
                    else Q -= WindowNAFPointMultiplication_Precompute.Instance.Pi[-ki];
                }
            }

            return Q;
        }

 
    }
}
