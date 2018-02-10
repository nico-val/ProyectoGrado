
using System;
using System.Collections.Generic;
using System.Linq;
using System.Numerics;
using System.Text;

namespace ASN1_Generator
{
    public class ASN1_Generator {


        public static ASN1_Generator Parse(byte[] content) {
            ASN1_Generator thisSequence = new ASN1_Generator();
            var reversedContent = content.Reverse<byte>().ToList();
            int cursor = 0;
            while (cursor < reversedContent.Count)
            {
                var type = reversedContent[cursor];
                var size = reversedContent[cursor + 1];

                switch (type) {
                    case 0x30:
                        thisSequence.Elements.Add(parseSequence(reversedContent.Skip(cursor + 2).Take(size).ToArray()));
                        break;
                    case 0x02:
                        thisSequence.Elements.Add(parseInteger(reversedContent.Skip(cursor + 2).Take(size).ToArray()));
                        break;
                }
                cursor += size + 2;
            }

            return thisSequence;
        }

        private static ASN1_Element parseSequence(byte[] content) {
            var thisSequence = new ASN1_Sequence();

            int cursor = 0;
            while (cursor < content.Length)
            {
                var type = content[cursor];
                var size = content[cursor + 1];

                switch (type) {
                    case 0x02:                        
                        thisSequence.content.Add(parseInteger(content.Skip(cursor + 2).Take(size).ToArray()));
                        break;
                }
                cursor += size + 2;
            }

            return thisSequence;
        }

        private static ASN1_Integer parseInteger(byte[] element)
        {
            //TODO repair this
            
            return new ASN1_Integer() { Value = new BigInteger(element.Reverse<byte>().ToArray()) };
        }


        public List<ASN1_Element> Elements = new List<ASN1_Element>();

        public byte[] GetBytes()
        {
            List<byte> sequenceBytes = new List<byte>();
            foreach (var element in Elements) sequenceBytes.InsertRange(sequenceBytes.Count, element.GetBytes());            

            return sequenceBytes.ToArray();

        }

    }

    public interface ASN1_Element {
        byte[] GetBytes();
    }

    public class ASN1_Sequence : ASN1_Element
    {        
        public List<ASN1_Element> content = new List<ASN1_Element>();

        public byte[] GetBytes()
        {
            List<byte> sequenceBytes = new List<byte>();
            
            foreach (var element in content.Reverse<ASN1_Element>()) sequenceBytes.InsertRange(sequenceBytes.Count, element.GetBytes());

            sequenceBytes.Insert(sequenceBytes.Count, (byte)sequenceBytes.Count);

            sequenceBytes.Insert(sequenceBytes.Count, 0x30);

            return sequenceBytes.ToArray();
            
        }
    }

    public class ASN1_Integer : ASN1_Element{
        public BigInteger Value;

        public byte[] GetBytes()
        {
            List<byte> sequenceBytes = Value.ToByteArray().ToList();

            
            sequenceBytes.Insert(sequenceBytes.Count, (byte)sequenceBytes.Count);

            sequenceBytes.Insert(sequenceBytes.Count, 0x02);

            return sequenceBytes.ToArray();

        }

    }
    
}
