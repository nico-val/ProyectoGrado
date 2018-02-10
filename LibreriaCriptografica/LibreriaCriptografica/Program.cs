
//using Mpir.NET;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;

namespace LibreriaCriptografica
{
    class Program
    {                                
        
        public static Punto FixedBaseWindowing(BigInteger k) {
            Punto A = Punto.Infinito;
            Punto B = Punto.Infinito;

            List<BigInteger> kBase = Base(k, (int)Math.Pow(2,Precompute.Instance.w));

            //for (int j = (int)Math.Pow(2, Precompute.Instance.w) - 1; j >= 1; j--) {
            //    for (int i = Precompute.Instance.d - 1; i >= 0; i--)
            //        if (kBase[i] == j) B = B + Precompute.Instance.Pi[i];


            //    A = A + B;
            //}

            var add = Precompute.Instance.d - kBase.Count;
            if (add > 0)
                for (int l = 0; l<add;l++)
                    kBase.Add(0);
                

            for (int j = (int)Math.Pow(2, Precompute.Instance.w) - 1; j >= 1; j--)
            {

                    for (int i = Precompute.Instance.d - 1; i >= 0; i--)
                        if (kBase[i] == j) B = B + Precompute.Instance.Pi[i];
                    A = A + B;
            }



            return new Punto() { X = Arithmetic.Mod(A.X,Params.p), Y = Arithmetic.Mod(A.Y,Params.p), Z = Arithmetic.Mod(A.Z,Params.p) };            
        }

        public static Punto FixedBase_NAFWindowing(BigInteger k)
        {

            var NAF = Punto.computeNAF(k);

            Punto A = Punto.Infinito;
            Punto B = Punto.Infinito;

            int d = (int)Math.Ceiling((double)(NAF.Count -1) / (double) Precompute_FixedBaseNAFWindowing.Instance.w);

            List<BigInteger> kBase = Base(k, (int)Math.Pow(2, Precompute_FixedBaseNAFWindowing.Instance.w));

            for (int j = (int)Math.Pow(2, Precompute_FixedBaseNAFWindowing.Instance.w) - 1; j >= 1; j--)
            {
                for (int i = Precompute_FixedBaseNAFWindowing.Instance.d - 1; i >= 0; i--)
                    if (kBase[i] == j) B = B + Precompute_FixedBaseNAFWindowing.Instance.Pi[i];

                A = A + B;
            }
            return A;
        }


        public static List<BigInteger> Base(BigInteger k, int b) {
            var result = new List<BigInteger>();

            while (k != 0) {
                result.Add(BigInteger.Remainder(k, b));
                k = k / b;                
            }

            return result;
            

        }

        public static byte[] StringToByteArray(string hex)
        {
            return Enumerable.Range(0, hex.Length)
                             .Where(x => x % 2 == 0)
                             .Select(x => Convert.ToByte(hex.Substring(x, 2), 16))
                             .ToArray();
        }

        public void FastModularReduction_secp256k1(BigInteger a) {

            var aString = a.ToString();



        }

        static void Main(string[] args)
        {
            BigInteger x = BigInteger.Parse("1780819745898020903958445983817712046940526920208100261980597417995944094029596777064056093853401612609592446720592179827428830711037179095183363610369286896530377147020164486564305282834564397204864742032807451239311336678027124958183095442467202432885533412460497680631724687052136004971388767593842487219676700541041028853340921294573751002235691309531779181643421745137316858017632");

            BigInteger k = BigInteger.Parse("115792089210356248762697446949407573530086143415290314195533631308867097853951");

            //Helper.Profile("My Mod", 229230, () => {
                var mod1 = Arithmetic.Mod(x, k);
            //});

            //Helper.Profile("Barret Mod", 229230, () => {
            //   var mod2 = Arithmetic.BarretReductionAlgorithm(x, k);
            ///});

            //var mod3 = Arithmetic.BarretReductionAlgorithm(100, 98);

            List<BigInteger> RandomNumberList = new List<BigInteger>();
            
            //RNGCryptoServiceProvider gen = new RNGCryptoServiceProvider();
            /*
            for (int i = 0; i < 100; i++) {
                RandomNumberList.Add(Helper.Random2(Params.n));
            }*/

            BigInteger privateKey = BigInteger.Parse("94361336695759970226033743282780066403459847548114294645768255588287705655236");

            BigInteger extremelyBigNumber = BigInteger.Parse("1551461040052421630033376555637176927247652242296410672656213134199868674668982407090806310045623166501952293335446863972054254916150318019623130606042930044162267055807608625164274499130491713157653862043041846755192480788386477939774639435688740210646927594059354958526722186425583509661728559912246704339035370747853464735324155659865526249236817957209992379928407951016837355049751914048973680813110386622841414029072466793204155119949410039474434795850555640661534924144623563930525759219190180188740845965806118537410973298634016690697312160969002462761252307795051914445410837447949377761948624682900899665567231192899475473514291983333722860346363121933440060876201363493841809549535166164872948031112619975338416030325359423737371253808843126492551925149823504");

            Punto test3 = Punto.LeftToRight_BinaryMultiplication(privateKey, Params.G);



            //////
            //////
            //////
            /*
            OperationCounter.Instance.Reset();
            Helper.Profile("Binary NAF Point Multiplication", 1, () => {
                foreach (var number in RandomNumberList) {
                    Point.BinaryNAFPointMultiplication(number, Params.G);
                }
            });
            OperationCounter.Instance.PrintCounts();



            OperationCounter.Instance.Reset();
            Helper.Profile("Left-to-right binary method for point multiplication", 1, () => {
                foreach (var number in RandomNumberList)
                {
                    Point.LeftToRight_BinaryMultiplication(number, Params.G);
                }
            });
            OperationCounter.Instance.PrintCounts();

            OperationCounter.Instance.Reset();
            Helper.Profile("Right-to-left binary method for point multiplication", 1, () => {
                foreach (var number in RandomNumberList)
                {
                    Point.RightToLeft_BinaryMultiplication(number, Params.G);
                }
            });
            OperationCounter.Instance.PrintCounts();


            WindowNAFPointMultiplication_Precompute.Instance.Initialize(2);
            Helper.Profile("Window NAF method for point multiplication (window width = 2)", 1, () => {
                foreach (var number in RandomNumberList)
                {
                    Point.WindowNAFPointMultiplication(number, Params.G);
                }
            });
            OperationCounter.Instance.PrintCounts();


            Precompute.Instance.Initialize(2);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 2)", 1, () => {
                foreach (var number in RandomNumberList)
                {
                    FixedBaseWindowing(number);
                }
            });
            OperationCounter.Instance.PrintCounts();

            Precompute.Instance.Initialize(3);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 3)", 1, () => {
                foreach (var number in RandomNumberList)
                {
                    FixedBaseWindowing(number);
                }
            });
            OperationCounter.Instance.PrintCounts();

            Precompute.Instance.Initialize(4);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 4)", 1, () => {
                foreach (var number in RandomNumberList)
                {
                    FixedBaseWindowing(number);
                }
            });
            OperationCounter.Instance.PrintCounts();

            Precompute.Instance.Initialize(5);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 5)", 1, () => {
                foreach (var number in RandomNumberList)
                {
                    FixedBaseWindowing(number);
                }
            });
            OperationCounter.Instance.PrintCounts();

            Precompute.Instance.Initialize(6);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 6)", 1, () => {
                foreach (var number in RandomNumberList)
                {
                    FixedBaseWindowing(number);
                }
            });
            OperationCounter.Instance.PrintCounts();


            WindowNAFPointMultiplication_Precompute.Instance.Initialize(2);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 2)", 1, () =>
            {
                foreach (var number in RandomNumberList)
                {
                    Point.WindowNAFPointMultiplication(number, Params.G);
                }
            });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(3);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 3)", 1, () =>
            {
                foreach (var number in RandomNumberList)
                {
                    Point.WindowNAFPointMultiplication(number, Params.G);
                }
            });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(4);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 4)", 1, () =>
            {
                foreach (var number in RandomNumberList)
                {
                    Point.WindowNAFPointMultiplication(number, Params.G);
                }
            });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(5);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 5)", 1, () =>
            {
                foreach (var number in RandomNumberList)
                {
                    Point.WindowNAFPointMultiplication(number, Params.G);
                }
            });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(6);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 6)", 1, () =>
            {
                foreach (var number in RandomNumberList)
                {
                    Point.WindowNAFPointMultiplication(number, Params.G);
                }
            });
            OperationCounter.Instance.PrintCounts();
            */
            //////
            //////
            //////

            Punto publicKey = privateKey * Params.G;
            Punto test2 = Punto.RightToLeft_BinaryMultiplication(privateKey, Params.G);

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(10);
            //Point test3 = Point.WindowNAFPointMultiplication(privateKey, Params.G);           
            Punto test4 = FixedBaseWindowing(privateKey);

           
            var message = Encoding.UTF8.GetBytes("Test message");

            //var signature = ECDSA_signature_generation(message, privateKey);

            //var verification = ECDSA_signature_verification(publicKey, message, signature);
            /*
            OperationCounter.Instance.Reset();
            Helper.Profile("Binary NAF Point Multiplication", 100, () => { Point.BinaryNAFPointMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();

            Helper.Profile("Left-to-right binary method for point multiplication", 100, () => { Point.LeftToRight_BinaryMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();

            Helper.Profile("Right-to-left binary method for point multiplication", 100, () => { Point.RightToLeft_BinaryMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();
            */
            /*
            Helper.Profile("Computing wNAF (window width = 5)", 100, () => { Point.compute_wNAF(privateKey, 5); });

            Helper.Profile("Computing wNAF (window width = 10)", 100, () => { Point.compute_wNAF(privateKey, 5); });

            Helper.Profile("Computing wNAF (window width = 100)", 100, () => { Point.compute_wNAF(privateKey, 5); });
            */            
            /*
            Precompute.Instance.Initialize(2);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 2)", 100, () => { FixedBaseWindowing(privateKey); });
            OperationCounter.Instance.PrintCounts();

            Precompute.Instance.Initialize(3);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 3)", 100, () => { FixedBaseWindowing(privateKey); });
            OperationCounter.Instance.PrintCounts();

            Precompute.Instance.Initialize(4);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 4)", 100, () => { FixedBaseWindowing(privateKey); });
            OperationCounter.Instance.PrintCounts();

            Precompute.Instance.Initialize(5);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 5)", 100, () => { FixedBaseWindowing(privateKey); });
            OperationCounter.Instance.PrintCounts();

            Precompute.Instance.Initialize(6);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 6)", 100, () => { FixedBaseWindowing(privateKey); });
            OperationCounter.Instance.PrintCounts();

            Precompute.Instance.Initialize(7);
            OperationCounter.Instance.Reset();
            Helper.Profile("Fixed-base windowing method (window width = 7)", 100, () => { FixedBaseWindowing(privateKey); });
            OperationCounter.Instance.PrintCounts();


            WindowNAFPointMultiplication_Precompute.Instance.Initialize(2);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 2)", 100, () => { Point.WindowNAFPointMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(3);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 3)", 100, () => { Point.WindowNAFPointMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(4);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 4)", 100, () => { Point.WindowNAFPointMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(5);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 5)", 100, () => { Point.WindowNAFPointMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(6);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 6)", 100, () => { Point.WindowNAFPointMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(7);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 7)", 100, () => { Point.WindowNAFPointMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();

            WindowNAFPointMultiplication_Precompute.Instance.Initialize(10);
            OperationCounter.Instance.Reset();
            Helper.Profile("Window NAF method for point multiplication (window width = 10)", 100, () => { Point.WindowNAFPointMultiplication(privateKey, Params.G); });
            OperationCounter.Instance.PrintCounts();



            */


            var inverse = Arithmetic.Inversion_ExtendedEuclidean(-9, 23);
            //Console.WriteLine(Params.p);
            //Console.WriteLine(Params.G.x);
            //Console.WriteLine(Params.G.y);


            Console.ReadKey();

        }


     


    }

    public sealed class Precompute
    {
        static readonly Precompute instance = new Precompute();

        // Explicit static constructor to tell C# compiler
        // not to mark type as beforefieldinit
        static Precompute()
        {
        }

        Precompute()
        {
            Initialize(this.w);
        }

        public void Initialize(int w) {
            Console.WriteLine("Precomputing with Window Width = " + w);

            this.w = w;

            this._Pi = new List<Punto>();

            this.d = (int)Math.Ceiling((double)Params.bits / (double)this.w);

            for (int i = 0; i <= (d - 1); i++)
            {
                this._Pi.Add(BigInteger.Pow(2, this.w * i) * Params.G);
            }
        }

        private List<Punto> _Pi;
        internal List<Punto> Pi { get => _Pi; /*set => _Pi = value;*/ }

        public int w = 5;
        public int d;

        public static Precompute Instance
        {
            get
            {
                return instance;
            }
        }

        
    }

    public sealed class Precompute_FixedBaseNAFWindowing
    {
        static readonly Precompute_FixedBaseNAFWindowing instance = new Precompute_FixedBaseNAFWindowing();

        // Explicit static constructor to tell C# compiler
        // not to mark type as beforefieldinit
        static Precompute_FixedBaseNAFWindowing()
        {
        }

        Precompute_FixedBaseNAFWindowing()
        {
            Console.WriteLine("Precomputing...");


            this._Pi = new List<Punto>();


            this.d = (int)Math.Ceiling((double)(Params.bits +1) / (double)this.w);

            for (int i = 0; i <= (d - 1); i++)
            {
                this._Pi.Add(BigInteger.Pow(2, this.w * i) * Params.G);
            }

        }

        private List<Punto> _Pi;
        internal List<Punto> Pi { get => _Pi; /*set => _Pi = value;*/ }

        public int w = 5;
        public int d;

        public static Precompute_FixedBaseNAFWindowing Instance
        {
            get
            {
                return instance;
            }
        }


    }
    
 
     

    
}
