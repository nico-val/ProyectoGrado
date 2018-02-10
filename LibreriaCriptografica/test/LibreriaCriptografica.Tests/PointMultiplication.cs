using System;
using System.Collections.Generic;
using System.Numerics;
using System.Text;
using Xunit;

namespace LibreriaCriptografica.Tests
{
    public class PointMultiplication
    {
        public static BigInteger priv = BigInteger.Parse("96027634291659060395483785084249388190055196043451180312744722372264529226043");

        public static Punto expectedPublicKey = new Punto(
                BigInteger.Parse("112020819586137188552908696683783840315338002301342661855542801302178439113791"),
                BigInteger.Parse("5449582511483994652966359040588066319816144731582838673396683188445550535321")
                );

        [Fact(DisplayName = "Prueba Multiplicación")]
        public void Test3()
        {                        
            var calculatedPublicKey = Punto.LeftToRight_BinaryMultiplication(priv, Params.G);

            Assert.Equal(expectedPublicKey.x, calculatedPublicKey.x);
            Assert.Equal(expectedPublicKey.y, calculatedPublicKey.y);
        }     
    }
}
