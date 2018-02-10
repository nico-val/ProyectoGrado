using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoGrado_SFE.WebAPI.Migrations
{
    public partial class NombreIdentificativoCLave : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "NombreIdentificativo",
                table: "Clave",
                nullable: true);

            migrationBuilder.AddColumn<byte[]>(
                name: "PublicKey",
                table: "Clave",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "NombreIdentificativo",
                table: "Clave");

            migrationBuilder.DropColumn(
                name: "PublicKey",
                table: "Clave");
        }
    }
}
