using System;
using System.Text;
using Xunit;

namespace LibreriaCriptografica.Tests
{
    public class UnitTest1
    {
        [Fact(DisplayName = "Prueba de Firma Electrónica correcta")]
        public void Test1()
        {            
            var mensajePrueba = Encoding.UTF8.GetBytes("Mensaje de prueba");
            var nuevoPar = LibreriaCriptografica.KeyPair.GenerarNuevo();
            var firmaElectronica = FirmaElectronica.GenerarFirmaElectronica(
                mensajePrueba,
                nuevoPar.PrivateKey.BigInteger
                );

            Assert.True(LibreriaCriptografica.FirmaElectronica.VerificarFirmaElectronica(nuevoPar.PublicKey.Point, mensajePrueba, firmaElectronica));            
        }

        [Fact(DisplayName = "Prueba de Firma Electrónica errónea")]
        public void Test2()
        {
            var mensajePrueba = Encoding.UTF8.GetBytes("Mensaje de prueba");
            var nuevoPar = LibreriaCriptografica.KeyPair.GenerarNuevo();
            var firmaElectronica = LibreriaCriptografica.FirmaElectronica.GenerarFirmaElectronica(mensajePrueba, nuevoPar.PrivateKey.BigInteger);

            //Modifico la variable mensajePrueba
            mensajePrueba = Encoding.UTF8.GetBytes("Mensaje de prueba modificado");

            Assert.False(LibreriaCriptografica.FirmaElectronica.VerificarFirmaElectronica(nuevoPar.PublicKey.Point, mensajePrueba, firmaElectronica));
        }
    }
}
