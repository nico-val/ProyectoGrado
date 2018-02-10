using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;

namespace ConsoleApp1
{
    class Helper
    {
        public static byte[] StringToByteArray(string hex)
        {
            hex = hex.Replace(" ", string.Empty);
            return Enumerable.Range(0, hex.Length)
                             .Where(x => x % 2 == 0)
                             .Select(x => Convert.ToByte(hex.Substring(x, 2), 16))
                             .ToArray();
        }

        public static string ByteArrayToString(byte[] ba)
        {
            StringBuilder hex = new StringBuilder(ba.Length * 2);
            for (int i = ba.Length - 1; i >= 0; i--) hex.AppendFormat("{0:x2}", ba[i]);
            return hex.ToString();
        }

        public static void CompressToZip(string fileName, Dictionary<string, byte[]> fileList)
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

                using (var fileStream = new FileStream(fileName, FileMode.Create))
                {
                    memoryStream.Seek(0, SeekOrigin.Begin);
                    memoryStream.CopyTo(fileStream);
                }
            }

        }

        public static double Profile(string description, int iterations, Action func)
        {
            //Run at highest priority to minimize fluctuations caused by other processes/threads
            Process.GetCurrentProcess().PriorityClass = ProcessPriorityClass.High;
            //Thread.CurrentThread.Priority = ThreadPriority.Highest;

            // warm up 
            func();

            var watch = new Stopwatch();

            // clean up
            GC.Collect();
            GC.WaitForPendingFinalizers();
            GC.Collect();

            watch.Start();
            for (int i = 0; i < iterations; i++)
            {
                func();
            }
            watch.Stop();
            Console.Write(description);
            Console.WriteLine(" Time Elapsed {0} ms", watch.Elapsed.TotalMilliseconds);
            return watch.Elapsed.TotalMilliseconds;
        }
    }
}
