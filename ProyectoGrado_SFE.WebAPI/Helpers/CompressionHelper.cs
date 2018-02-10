using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Helpers
{
    public static class CompressionHelper
    {
        public static byte[] CompressToZip(string fileName, Dictionary<string, byte[]> fileList)
        {
            using (var memoryStream = new MemoryStream())
            {
                using (var archive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
                {
                    foreach (var file in fileList)
                    {

                        var demoFile = archive.CreateEntry(file.Key);

                        using (var entryStream = demoFile.Open())
                        using (var b = new BinaryWriter(entryStream))
                        {
                            b.Write(file.Value);
                        }
                    }
                }

                return memoryStream.ToArray();
                /*
                using (var fileStream = new FileStream(fileName, FileMode.Create))
                {
                    memoryStream.Seek(0, SeekOrigin.Begin);
                    memoryStream.CopyTo(fileStream);
                }*/
            }

        }

        public static Dictionary<string, byte[]> UnCompressZip(byte[] compressedFile)
        {
            Dictionary<string, byte[]> uncompressedFiles = new Dictionary<string, byte[]>();
            using (var memoryStream = new MemoryStream(compressedFile))
            {
                using (var archive = new ZipArchive(memoryStream, ZipArchiveMode.Read, false))
                {
                    foreach (var entry in archive.Entries)
                    {
                        using (MemoryStream ms = new MemoryStream())
                        using (var stream = entry.Open())
                        {
                            stream.CopyTo(ms);

                            uncompressedFiles.Add(entry.Name, ms.ToArray());

                            // do whatever we want with stream
                            // ...
                        }
                    }
                }

                return uncompressedFiles;
                /*
                using (var fileStream = new FileStream(fileName, FileMode.Create))
                {
                    memoryStream.Seek(0, SeekOrigin.Begin);
                    memoryStream.CopyTo(fileStream);
                }*/
            }

        }
    }
}
