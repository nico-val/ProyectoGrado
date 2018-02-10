using Org.BouncyCastle.Asn1;
using Org.BouncyCastle.Asn1.Sec;
using Org.BouncyCastle.Asn1.X509;
using Org.BouncyCastle.Asn1.X9;
using Org.BouncyCastle.Crypto.Parameters;
using Org.BouncyCastle.Pkcs;
using Org.BouncyCastle.Security;
using System;
using System.Collections.Generic;
using System.Linq;

namespace LibreriaCriptografica
{
    public class CertificateSigningRequest
    {
        public static string GeneratePkcs10
            (PrivateKey privKey, PublicKey pubKey, string commonName, string organization, string organizationUnit, string city, string state,
             string countryIso2Characters, string email)
        {
            try
            {
                Org.BouncyCastle.Math.BigInteger d = new Org.BouncyCastle.Math.BigInteger(privKey.ByteArray.Reverse().ToArray());

                SecureRandom secureRandom = new SecureRandom();
                X9ECParameters curve = SecNamedCurves.GetByName("secp256k1");
                ECDomainParameters domain = new ECDomainParameters(curve.Curve, curve.G, curve.N, curve.H);

                Org.BouncyCastle.Math.EC.ECPoint q = domain.G.Multiply(d);
                
                var priv = new ECPrivateKeyParameters("EC", d, SecObjectIdentifiers.SecP256k1);
                var pub = new ECPublicKeyParameters("EC",q, SecObjectIdentifiers.SecP256k1);

                Dictionary <DerObjectIdentifier, string> attrs = new Dictionary<DerObjectIdentifier, string>();

                attrs.Add(X509Name.O, organization);
                attrs.Add(X509Name.OU, organizationUnit);
                attrs.Add(X509Name.EmailAddress, email);
                attrs.Add(X509Name.L, city);
                attrs.Add(X509Name.ST, state);
                attrs.Add(X509Name.C, countryIso2Characters);
                attrs.Add(X509Name.CN, commonName);

                var subject = new X509Name(attrs.Keys.ToList(), attrs.Values.ToList());
                
                var pkcs10CertificationRequest = new Pkcs10CertificationRequest("SHA1withECDSA", subject, pub, null, priv);
                var base64csr = Convert.ToBase64String(pkcs10CertificationRequest.GetEncoded());

                var width = 64;
                for (int i = width; i < base64csr.Length; i += width + 1) base64csr = base64csr.Insert(i,"\n");

                return base64csr;
            }
            catch (Exception ex)
            {
                throw;
            }
        }
    }
}
