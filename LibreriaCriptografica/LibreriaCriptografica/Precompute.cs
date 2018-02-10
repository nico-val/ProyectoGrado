using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;
using System.Threading.Tasks;

namespace LibreriaCriptografica
{
    public sealed class WindowNAFPointMultiplication_Precompute
    {
        static readonly WindowNAFPointMultiplication_Precompute instance = new WindowNAFPointMultiplication_Precompute();

        // Explicit static constructor to tell C# compiler
        // not to mark type as beforefieldinit
        static WindowNAFPointMultiplication_Precompute()
        {
        }

        WindowNAFPointMultiplication_Precompute()
        {            
        }

        public Dictionary<BigInteger, Punto> Pi;

        private int _w;
        public int w { get => _w; }

        public void Initialize(int WindowWidth)
        {
            this.Pi = new Dictionary<BigInteger, Punto>();
            Console.WriteLine("Precomputing WindowNAFPointMultiplication_Precompute");
            this._w = WindowWidth;

            Dictionary<BigInteger, Punto> Pi = new Dictionary<BigInteger, Punto>();
            for (int i = 1; i <= (Math.Pow(2, this.w - 1) - 1); i++)
            {
                this.Pi.Add(i, i * Params.G);
            }
        }

        public static WindowNAFPointMultiplication_Precompute Instance
        {
            get
            {
                return instance;
            }
        }
        class Nested
        {
            // Explicit static constructor to tell C# compiler
            // not to mark type as beforefieldinit
            static Nested()
            {
            }

            internal static readonly WindowNAFPointMultiplication_Precompute instance = new WindowNAFPointMultiplication_Precompute();
        }
    }



}
