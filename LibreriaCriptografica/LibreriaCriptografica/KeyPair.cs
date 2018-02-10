using System.Numerics;

namespace LibreriaCriptografica
{    
    public class KeyPair
    {
        public static KeyPair GenerarNuevo() {

            var randBigInteger = Helper.Random(Params.n);
            PrivateKey priv = new PrivateKey(randBigInteger);
            PublicKey pub = new PublicKey(randBigInteger * Params.G);

            return new KeyPair() { _privateKey = priv, _publicKey = pub };            
        }
        private PrivateKey _privateKey;
        private PublicKey _publicKey;

        public PrivateKey PrivateKey => _privateKey;
        public PublicKey PublicKey => _publicKey;

    }

    public class PrivateKey
    {

        public PrivateKey(BigInteger n)
        {
            this._privateKey = n;
        }

        private BigInteger _privateKey;

        public byte[] ByteArray => _privateKey.ToByteArray();
        public BigInteger BigInteger => _privateKey;
    }

    public class PublicKey
    {
        public PublicKey(Punto p)
        {
            this._publicKey = p;
        }

        private Punto _publicKey;

        public byte[] ByteArray => _publicKey.GetUncompressedByteArray();
        public Punto Point => this._publicKey;
    }
}
