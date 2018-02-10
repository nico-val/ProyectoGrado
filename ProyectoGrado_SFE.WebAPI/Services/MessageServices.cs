using MailKit.Net.Smtp;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoGrado_SFE.WebAPI.Services
{
    // This class is used by the application to send Email and SMS
    // when you turn on two-factor authentication in ASP.NET Identity.
    // For more details see this link https://go.microsoft.com/fwlink/?LinkID=532713
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        public Task SendEmailAsync(string email, string subject, string messageBody)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Joey Tribbiani", "joey@friends.com"));
            message.To.Add(new MailboxAddress(email));
            message.Subject = subject;

            message.Body = new TextPart("plain") {
                Text = messageBody
            };
            //message.Body = new TextPart("plain")
            //{
            //    Text = @"Hey Chandler,
            //            I just wanted to let you know that Monica and I were going to go play some paintball, you in?
            //            -- Joey"
            //};

            using (var client = new SmtpClient())
            {
                // For demo-purposes, accept all SSL certificates (in case the server supports STARTTLS)
                client.ServerCertificateValidationCallback = (s, c, h, e) => true;

                try
                {
                    client.Connect("localhost", 25, false);
                }
                catch (Exception e) { throw; }

                // Note: since we don't have an OAuth2 token, disable
                // the XOAUTH2 authentication mechanism.
                client.AuthenticationMechanisms.Remove("XOAUTH2");

                // Note: only needed if the SMTP server requires authentication
                try
                {
                    //client.Authenticate("ProyectoGrado_SFE", "Qwe!23");
                }
                catch (Exception e) {
                    throw;
                }
                try
                {
                    client.Send(message);
                }
                catch (Exception e) {
                    throw;
                }

                client.Disconnect(true);
                return Task.FromResult(0);
                //client.Disconnect(true);
            }

        }

        public Task SendSmsAsync(string number, string message)
        {
            // Plug in your SMS service here to send a text message.
            return Task.FromResult(0);
        }
    }
}
