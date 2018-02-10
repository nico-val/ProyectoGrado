using ASN1_Generator;
using System.Numerics;

namespace LibreriaCriptografica
{
    public static class FirmaElectronica
    {
        public static byte[] GenerarFirmaElectronica(byte[] message, BigInteger privateKey)
        {
            while (true)
            {
                //Genero un valor 'k' aleatorio
                BigInteger k = Helper.Random(Params.n); 

                //Calculo el punto P = k*G
                Punto kP = k * Params.G; 

                BigInteger r = Arithmetic.Mod(kP.x, Params.n);

                if (r.IsZero) continue;
                
                var eHash = FirmaElectronica.ObtenerHash(message);
                var e = new BigInteger(eHash);
                if (e.Sign == -1) e = BigInteger.Negate(e);

                BigInteger s = Arithmetic.Mod(
                    Arithmetic.Inversion_ExtendedEuclidean(k, Params.n) * (e + privateKey * r), Params.n
                    );                

                var asn1 = new ASN1_Generator.ASN1_Generator();
                var seq = new ASN1_Generator.ASN1_Sequence();
                
                seq.content.Add(new ASN1_Generator.ASN1_Integer() { Value = r });
                seq.content.Add(new ASN1_Generator.ASN1_Integer() { Value = s });

                asn1.Elements.Add(seq);

                return asn1.GetBytes();
            }
        }

        public static bool VerificarFirmaElectronica(Punto publicKey, byte[] message, byte[] signature)
        {
            var parsed = ASN1_Generator.ASN1_Generator.Parse(signature);

            var r = ((ASN1_Integer)((ASN1_Sequence)parsed
                .Elements[0])
                .content[0])
                .Value;

            var s = ((ASN1_Integer)((ASN1_Sequence)parsed
                .Elements[0])
                .content[1])
                .Value;

            if (!(0 < r && r < Params.n)) return false;
            if (!(0 < s && s < Params.n)) return false;
            
            var eHash = FirmaElectronica.ObtenerHash(message);
            
            var e = new BigInteger(eHash);
            if (e.Sign == -1) e = BigInteger.Negate(e);

            var w = Arithmetic.Inversion_ExtendedEuclidean(s, Params.n);

            var u1 = Arithmetic.Mod(e * w, Params.n);

            var u2 = Arithmetic.Mod(r * w, Params.n);

            var X = u1 * Params.G + u2 * publicKey;

            if (X.EsInfinito || X.EsCero) return false;

            var v = Arithmetic.Mod(X.x, Params.n);

            if (v == r) return true;
            else return false;
        }

        public static byte[] ObtenerHash(byte[] message)
        {
            var sha256 = System.Security.Cryptography.SHA256.Create();
            var eHash = sha256.ComputeHash(message);
            return eHash;
        }
    }
}
