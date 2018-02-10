using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoGrado_SFE.WebAPI.Migrations
{
    public partial class More_Changes : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<byte[]>(
                name: "CSR",
                table: "Clave",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "FechaCertificacion",
                table: "Clave",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "UsuarioCertificador",
                table: "Clave",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CSR",
                table: "Clave");

            migrationBuilder.DropColumn(
                name: "FechaCertificacion",
                table: "Clave");

            migrationBuilder.DropColumn(
                name: "UsuarioCertificador",
                table: "Clave");
        }
    }
}
