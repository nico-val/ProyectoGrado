using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ProyectoGrado_SFE.WebAPI.Migrations
{
    public partial class logfirma : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RegistroFirmaElectronica",
                columns: table => new
                {
                    FirmaId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGeneratedOnAdd", true),
                    ApplicationUserId = table.Column<string>(nullable: true),
                    ClaveId = table.Column<int>(nullable: true),
                    FechaGeneracion = table.Column<DateTime>(nullable: false),
                    Firma = table.Column<byte[]>(nullable: true),
                    Hash = table.Column<string>(nullable: true),
                    NombreArchivo = table.Column<string>(nullable: true),
                    TamanoArchivo = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegistroFirmaElectronica", x => x.FirmaId);
                    table.ForeignKey(
                        name: "FK_RegistroFirmaElectronica_AspNetUsers_ApplicationUserId",
                        column: x => x.ApplicationUserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_RegistroFirmaElectronica_Clave_ClaveId",
                        column: x => x.ClaveId,
                        principalTable: "Clave",
                        principalColumn: "ClaveId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RegistroFirmaElectronica_ApplicationUserId",
                table: "RegistroFirmaElectronica",
                column: "ApplicationUserId");

            migrationBuilder.CreateIndex(
                name: "IX_RegistroFirmaElectronica_ClaveId",
                table: "RegistroFirmaElectronica",
                column: "ClaveId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RegistroFirmaElectronica");
        }
    }
}
