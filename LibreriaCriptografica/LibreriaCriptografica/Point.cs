using System;
using System.Linq;
using System.Numerics;

namespace LibreriaCriptografica
{
    public partial class Punto
    {                        
        public static Punto Infinito
        {
            get
            {
                return new Punto()
                {
                    _EsInfinito = true,
                    _x = BigInteger.Zero,
                    _y = BigInteger.Zero
                };
            }
        }

        public Punto Negar {
            get {                
                return new Punto() { X = this.X, Y = Arithmetic.Mod(-this.Y, Params.p), Z = this.Z};                
            }
        }

        public Punto(BigInteger x, BigInteger y)
        {
            this.X = x;
            this.Y = y;
            this.Z = 1;
        }

        public Punto(byte[] byteArray)
        {

            if (byteArray.Last() == 0x04)
            {
                var coordByteLength = (byteArray.Length - 1) / 2;

                byte[] xBytes = new byte[coordByteLength];

                byte[] yBytes = new byte[coordByteLength];

                Array.Copy(byteArray, coordByteLength, xBytes, 0, coordByteLength);
                Array.Copy(byteArray, 0, yBytes, 0, coordByteLength);

                var X = BigInteger_Extensions.CreateUnsignedBigInteger(xBytes);
                var Y = BigInteger_Extensions.CreateUnsignedBigInteger(yBytes);

                if (X.Sign == -1) X = BigInteger.Negate(X);
                if (Y.Sign == -1) Y = BigInteger.Negate(Y);

                this.X = X;
                this.Y = Y;
                this.Z = 1;
            }
        }        

        public Punto()
        {
        }

        private bool _EsInfinito;
        public bool EsInfinito { get { return _EsInfinito; } }
        public bool EsCero { get { if (X == 0 && X == 0 && Y == 0) return true; else return false; } }

        private BigInteger _x;
        private BigInteger _y;

        public BigInteger x
        {
            get
            {
                if (this.EsInfinito) throw new Exception();

                //return _x;

                return Arithmetic.Mod(X * Arithmetic.Inversion_ExtendedEuclidean(BigInteger.Pow(Z, 2), Params.p), Params.p);
            }
            set
            {
                this._x = value;
            }
        }

        public BigInteger y
        {
            get
            {
                if (this.EsInfinito) throw new Exception();
                return Arithmetic.Mod(Y * Arithmetic.Inversion_ExtendedEuclidean(BigInteger.Pow(Z, 3), Params.p), Params.p);
            }
            set
            {
                this._y = value;
            }
        }

        public BigInteger X;
        public BigInteger Y;
        public BigInteger Z;

        public byte[] GetCompressedByteArray() {
            var xByteArray = x.ToByteArray();
            var result = new byte[xByteArray.Length + 1];            
            xByteArray.CopyTo(result, 0);
            result[result.Length - 1] = 0x02;
            return result;
        }

        public byte[] GetUncompressedByteArray()
        {            
            var xByteArray = RemoveTrailingZeros(x.ToByteArray());
            var yByteArray = RemoveTrailingZeros(y.ToByteArray());
            var result = new byte[xByteArray.Length + yByteArray.Length + 1];
            yByteArray.CopyTo(result, 0);
            xByteArray.CopyTo(result, yByteArray.Length);            
            result[result.Length - 1] = 0x04;
            return result;
        }

        public static byte[] RemoveTrailingZeros(byte[] data) {

            byte[] foo = data;
            // populate foo
            int i = foo.Length - 1;
            while (foo[i] == 0)
                --i;
            // now foo[i] is the last non-zero byte
            byte[] bar = new byte[i + 1];
            Array.Copy(foo, bar, i + 1);

            return bar;
        }             
    }
}
