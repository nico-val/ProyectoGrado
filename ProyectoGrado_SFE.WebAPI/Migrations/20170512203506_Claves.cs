using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoGrado_SFE.WebAPI.Migrations
{
    public partial class Claves : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clave",
                columns: table => new
                {
                    ClaveId = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    ApplicationUserId = table.Column<string>(nullable: true),
                    Certificado = table.Column<byte[]>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    EncPrivKey = table.Column<byte[]>(nullable: true),
                    EstadoOProvincia = table.Column<string>(nullable: true),
                    FechaValidez = table.Column<DateTime>(nullable: false),
                    Localidad = table.Column<string>(nullable: true),
                    NombreComun = table.Column<string>(nullable: true),
                    Organizacion = table.Column<string>(nullable: true),
                    Pais = table.Column<string>(nullable: true),
                    UnidadOrganizacional = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clave", x => x.ClaveId);
                    table.ForeignKey(
                        name: "FK_Clave_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Clave_ApplicationUserId",
                table: "Clave",
                column: "ApplicationUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Clave");
        }
    }
}
