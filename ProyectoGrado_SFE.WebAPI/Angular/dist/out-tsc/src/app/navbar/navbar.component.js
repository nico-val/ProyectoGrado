"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var authentication_service_1 = require("../_services/authentication.service");
var NavbarComponent = (function () {
    function NavbarComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.goMisClaves = function () {
        this.router.navigate(['Claves']);
    };
    NavbarComponent.prototype.goCrearNuevoParClaves = function () {
        this.router.navigate(['Claves/NuevoPar']);
    };
    NavbarComponent.prototype.goGenerarFirmaElectronica = function () {
        this.router.navigate(['FirmaElectronica/Generar']);
    };
    NavbarComponent.prototype.goVerificarFirmaElectronica = function () {
        this.router.navigate(['FirmaElectronica/Verificar']);
    };
    NavbarComponent.prototype.logOut = function () {
        this.authenticationService.LogOut();
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        selector: 'nav',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css'],
        host: { 'class': 'navbar navbar-default navbar-fixed-side navbar-inverse' }
    }),
    __metadata("design:paramtypes", [router_1.Router, authentication_service_1.AuthenticationService])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map