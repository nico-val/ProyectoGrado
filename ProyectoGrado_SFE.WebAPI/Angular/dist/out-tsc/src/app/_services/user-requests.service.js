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
var http_1 = require("@angular/http");
var authentication_service_1 = require("./authentication.service");
var http_service_1 = require("./http.service");
var UserRequestsService = (function () {
    function UserRequestsService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserRequestsService.prototype.postCambiarPassword = function (model) {
        return this.http.post('http://localhost:5000/api/PanelControl/CambiarPassword', model)
            .map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.getNewTotpSecret = function () {
        return this.http.get('http://localhost:5000/api/PanelControl/nuevoSecretoTotp').map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.postNewTotpSecret = function (secret, code) {
        var body = { secret: secret, code: code };
        return this.http.post('http://localhost:5000/api/PanelControl/nuevoSecretoTotp', body).map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.getMyKeys = function () {
        return this.http.get('http://localhost:5000/api/Claves').map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.getKeyDetails = function (id) {
        return this.http.get('http://localhost:5000/api/Claves/' + id).map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.postNewKey = function (model) {
        return this.http.post('http://localhost:5000/api/Claves', model);
    };
    UserRequestsService.prototype.getAvailableSigningKeys = function () {
        return this.http.get('http://localhost:5000/api/FirmaElectronica/ClavesDisponibles').map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.postGenerarFirmaElectronica = function (model) {
        //let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.AuthToken });
        //headers.append("Content-Type", "multipart/form-data");
        //let reqOptions = new RequestOptions({ headers: headers });
        //reqOptions.responseType = ResponseContentType.Blob;
        var input = new FormData();
        input.append('ClaveId', model.ClaveId);
        input.append('Archivo', model.Archivo);
        input.append('Password', model.Password);
        return this.http.post('http://localhost:5000/api/FirmaElectronica/Generar', input, { responseType: http_1.ResponseContentType.Blob });
    };
    UserRequestsService.prototype.postVerificarFirmaElectronica = function (model) {
        var input = new FormData();
        input.append('Archivo', model.Archivo);
        input.append('ArchivoFirmaElectronica', model.ArchivoFirmaElectronica);
        return this.http.post('http://localhost:5000/api/FirmaElectronica/Verificar', input)
            .map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.getDescargarCertificado = function (id) {
        return this.http.get('http://localhost:5000/api/Claves/' + id + '/Certificado', { responseType: http_1.ResponseContentType.Blob });
    };
    ///////
    UserRequestsService.prototype.getClavesNoCertificadas = function () {
        return this.http.get('http://localhost:5000/api/AprobacionSolicitudes').map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.getSolicitudAprobacion = function (id) {
        return this.http.get('http://localhost:5000/api/AprobacionSolicitudes/' + id).map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.aprobarSolicitudAprobacion = function (id) {
        return this.http.patch('http://localhost:5000/api/AprobacionSolicitudes/' + id, { aprobado: true });
    };
    UserRequestsService.prototype.rechazarSolicitudAprobacion = function (id) {
        return this.http.patch('http://localhost:5000/api/AprobacionSolicitudes/' + id, { aprobado: false });
    };
    //////////
    UserRequestsService.prototype.getListaSolicitudesCertificacion = function () {
        return this.http.get('http://localhost:5000/api/SolicitudesCertificacion').map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.getSolicitudCertificacion = function (id) {
        return this.http.get('http://localhost:5000/api/SolicitudesCertificacion/' + id).map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.getDescargarCSR = function (id) {
        return this.http.get('http://localhost:5000/api/SolicitudesCertificacion/' + id + '/DescargarCSR', { responseType: http_1.ResponseContentType.Blob });
    };
    UserRequestsService.prototype.patchCertificado = function (id, certificado) {
        var input = new FormData();
        input.append('certificado', certificado);
        return this.http.patch('http://localhost:5000/api/SolicitudesCertificacion/' + id, input);
    };
    UserRequestsService.prototype.postNewUser = function (model) {
        return this.http.post('http://localhost:5000/api/Usuarios', model);
    };
    UserRequestsService.prototype.getAuditoriaFirmasElectronicas = function () {
        return this.http.get('http://localhost:5000/api/Auditoria/FirmasElectronicas/').map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.getUsuarios = function () {
        return this.http.get('http://localhost:5000/api/Usuarios/').map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.postForgotPasswordRequest = function (email) {
        return this.http.post('http://localhost:5000/api/Account/ForgotPassword_Request', { Email: email });
    };
    UserRequestsService.prototype.postForgotPassword = function (model) {
        return this.http.post('http://localhost:5000/api/Account/ForgotPassword', model);
    };
    return UserRequestsService;
}());
UserRequestsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService,
        authentication_service_1.AuthenticationService])
], UserRequestsService);
exports.UserRequestsService = UserRequestsService;
//# sourceMappingURL=user-requests.service.js.map