webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_classes/generar-firma-electronica-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerarFirmaElectronicaModel; });
var GenerarFirmaElectronicaModel = (function () {
    function GenerarFirmaElectronicaModel(ClaveId, Archivo, Password) {
        this.ClaveId = ClaveId;
        this.Archivo = Archivo;
        this.Password = Password;
    }
    return GenerarFirmaElectronicaModel;
}());

//# sourceMappingURL=generar-firma-electronica-model.js.map

/***/ }),

/***/ "../../../../../src/app/_classes/verificar-firma-electronica-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificarFirmaElectronicaModel; });
var VerificarFirmaElectronicaModel = (function () {
    function VerificarFirmaElectronicaModel(Archivo, ArchivoFirmaElectronica) {
        this.Archivo = Archivo;
        this.ArchivoFirmaElectronica = ArchivoFirmaElectronica;
    }
    return VerificarFirmaElectronicaModel;
}());

//# sourceMappingURL=verificar-firma-electronica-model.js.map

/***/ }),

/***/ "../../../../../src/app/_components/administrador/auditoria-firmas-electronicas/auditoria-firmas-electronicas.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/administrador/auditoria-firmas-electronicas/auditoria-firmas-electronicas.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Auditoría</h2>\r\n<h3>Firmas electrónicas</h3>\r\n\r\n<p>\r\n    Solo podrán ser utilizados los pares de claves que hayan sido certificados por la Autoridad Certificante. Contacte a su Autoridad de Registro.\r\n</p>\r\n\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                Usuario\r\n            </th>\r\n\r\n            <th>\r\n                Nombre identificativo de clave\r\n            </th>\r\n\r\n            <th>\r\n                Archivo firmado\r\n            </th>\r\n            <th>Tamaño</th>\r\n            <th>Fecha de generación</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let firma of data\">\r\n            <td>\r\n                {{firma.userName}}\r\n            </td>\r\n            <td>\r\n                {{firma.nombreClave}}\r\n            </td>\r\n            <td>\r\n                {{firma.nombreArchivo}}\r\n            </td>\r\n            <td>\r\n                {{firma.tamanoArchivo}} bytes\r\n            </td>\r\n            <td>\r\n                {{firma.fechaGeneracion}}\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/administrador/auditoria-firmas-electronicas/auditoria-firmas-electronicas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditoriaFirmasElectronicasComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuditoriaFirmasElectronicasComponent = (function () {
    function AuditoriaFirmasElectronicasComponent(http, userRequestsService, router) {
        this.http = http;
        this.userRequestsService = userRequestsService;
        this.data = [];
    }
    AuditoriaFirmasElectronicasComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    AuditoriaFirmasElectronicasComponent.prototype.getData = function () {
        var _this = this;
        return this.userRequestsService.getAuditoriaFirmasElectronicas()
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
        //return this.http.get('http://localhost:5000/api/Claves')
        //    .map((res: Response) => res.json());
    };
    return AuditoriaFirmasElectronicasComponent;
}());
AuditoriaFirmasElectronicasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-auditoria-firmas-electronicas',
        template: __webpack_require__("../../../../../src/app/_components/administrador/auditoria-firmas-electronicas/auditoria-firmas-electronicas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/administrador/auditoria-firmas-electronicas/auditoria-firmas-electronicas.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* UserRequestsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AuditoriaFirmasElectronicasComponent);

var _a, _b, _c;
//# sourceMappingURL=auditoria-firmas-electronicas.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/administrador/crear-usuario/crear-usuario.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/administrador/crear-usuario/crear-usuario.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2>Crear nuevo usuario</h2>\r\n\r\n<form (ngSubmit)=\"onSubmit(nuevoUsuarioForm)\" #nuevoUsuarioForm=\"ngForm\">\r\n    <div class=\"form-horizontal\">\r\n        <hr>\r\n\r\n        <!--<h4>Ingrese los datos para la Solicitud de Firmado de Certificado:</h4>-->\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"NombreIdentificativo\">Email</label>\r\n            <div class=\"col-md-10\">\r\n                <input class=\"form-control\" type=\"text\" required name=\"Email\" [(ngModel)]=\"model.Email\" #UserName=\"ngModel\">\r\n                <!--<small id=\"fileHelp\" class=\"form-text text-muted\">Nombre con el que identificará al par de claves.</small>-->\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"NombreIdentificativo\">Tipo de usuario</label>\r\n            \r\n            <div class=\"col-md-10\">\r\n                <select class=\"form-control\" required name=\"Role\" [(ngModel)]=\"model.Role\" #Role=\"ngModel\">\r\n                    <option value=\"Usuario\">Usuario normal</option>\r\n                    <option value=\"AutoridadDeRegistro\">Autoridad de Registro</option>\r\n                    <option value=\"AutoridadCertificante\">Autoridad Certificante</option>\r\n                    <option value=\"Administrador\">Administrador</option>\r\n                </select>\r\n                \r\n                <small id=\"fileHelp\" class=\"form-text text-muted\">Un correo electrónico será enviado con las instrucciones para crear la contraseña y configurar la autenticación de dos pasos.</small>\r\n            </div>\r\n        </div>\r\n        \r\n        <div *ngIf=\"nuevoUsuarioForm.submitted && !nuevoUsuarioForm.valid\">\r\n            <p class=\"text-danger field-validation-valid\">Debe completar todos los campos.</p>\r\n        </div>\r\n        <div *ngIf=\"this.errorMessage\">\r\n            <p class=\"text-danger field-validation-valid\">{{this.errorMessage}}</p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <input type=\"submit\" value=\"Crear usuario\" class=\"btn btn-default\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div>\r\n    <a [routerLink]=\"['/Claves']\">Volver a la lista</a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/_components/administrador/crear-usuario/crear-usuario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__nuevo_usuario_view_model__ = __webpack_require__("../../../../../src/app/nuevo-usuario-view-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrearUsuarioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Http, Response } from '@angular/http';

var CrearUsuarioComponent = (function () {
    function CrearUsuarioComponent(userRequestsService, router) {
        this.userRequestsService = userRequestsService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__nuevo_usuario_view_model__["a" /* NuevoUsuarioViewModel */]();
    }
    CrearUsuarioComponent.prototype.ngOnInit = function () {
    };
    CrearUsuarioComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.valid)
            return;
        this.model.UserName = this.model.Email;
        this.submitted = true;
        console.log("Submit");
        console.log(form);
        this.userRequestsService.postNewUser(this.model)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            //console.log(data);
            if (data.success)
                _this.router.navigate(['PanelControl']);
            else {
                _this.errorMessage = data.message;
                console.log(_this.errorMessage);
            }
        });
        //.catch(this.handleError);;
    };
    return CrearUsuarioComponent;
}());
CrearUsuarioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-crear-usuario',
        template: __webpack_require__("../../../../../src/app/_components/administrador/crear-usuario/crear-usuario.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/administrador/crear-usuario/crear-usuario.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CrearUsuarioComponent);

var _a, _b;
//# sourceMappingURL=crear-usuario.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/administrador/lista-usuarios/lista-usuarios.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/administrador/lista-usuarios/lista-usuarios.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Auditoría</h2>\r\n<h3>Usuarios</h3>\r\n\r\n<!--<p>\r\n    Solo podrán ser utilizados los pares de claves que hayan sido certificados por la Autoridad Certificante. Contacte a su Autoridad de Registro.\r\n</p>-->\r\n\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th>\r\n                Nombre de usuario\r\n            </th>\r\n\r\n            <th>\r\n                Rol\r\n            </th>\r\n\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let user of data\">\r\n            <td>\r\n                {{user.userName}}\r\n            </td>\r\n            <td>\r\n                {{user.role}}\r\n            </td>            \r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/administrador/lista-usuarios/lista-usuarios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaUsuariosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaUsuariosComponent = (function () {
    function ListaUsuariosComponent(http, userRequestsService, router) {
        this.http = http;
        this.userRequestsService = userRequestsService;
        this.data = [];
    }
    ListaUsuariosComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ListaUsuariosComponent.prototype.getData = function () {
        var _this = this;
        return this.userRequestsService.getUsuarios()
            .subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
        //return this.http.get('http://localhost:5000/api/Claves')
        //    .map((res: Response) => res.json());
    };
    return ListaUsuariosComponent;
}());
ListaUsuariosComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-lista-usuarios',
        template: __webpack_require__("../../../../../src/app/_components/administrador/lista-usuarios/lista-usuarios.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/administrador/lista-usuarios/lista-usuarios.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* UserRequestsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ListaUsuariosComponent);

var _a, _b, _c;
//# sourceMappingURL=lista-usuarios.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/aprobacion-solicitudes/aprobacion-solicitudes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/aprobacion-solicitudes/aprobacion-solicitudes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Claves no certificadas</h2>\r\n\r\n<p>\r\n    Seleccione una clave\r\n</p>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n\r\n            <th>\r\n                Usuario solicitante\r\n            </th>\r\n\r\n            <th>\r\n                Nombre identificativo\r\n            </th>\r\n\r\n            <th>\r\n                Fecha de creación\r\n            </th>\r\n\r\n\r\n\r\n\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let solicitud of data\">\r\n            <td>\r\n                {{solicitud.nombreUsuario}}\r\n            </td>\r\n            <td>\r\n                {{solicitud.nombreIdentificativo}}\r\n            </td>\r\n            <td>\r\n                {{solicitud.fechaCreacion}}\r\n            </td>\r\n            <td>\r\n                <a routerLink=\"/AprobacionClavesNoCertificadas/{{solicitud.claveId}}\">Detalles</a>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/aprobacion-solicitudes/aprobacion-solicitudes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AprobacionSolicitudesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AprobacionSolicitudesComponent = (function () {
    function AprobacionSolicitudesComponent(userRequestsService) {
        this.userRequestsService = userRequestsService;
        this.data = {};
    }
    AprobacionSolicitudesComponent.prototype.ngOnInit = function () {
        this.getClaves();
    };
    AprobacionSolicitudesComponent.prototype.getData = function () {
        return this.userRequestsService.getClavesNoCertificadas();
        //return this.http.get('http://localhost:5000/api/Claves')
        //    .map((res: Response) => res.json());
    };
    AprobacionSolicitudesComponent.prototype.getClaves = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    return AprobacionSolicitudesComponent;
}());
AprobacionSolicitudesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-aprobacion-solicitudes',
        template: __webpack_require__("../../../../../src/app/_components/aprobacion-solicitudes/aprobacion-solicitudes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/aprobacion-solicitudes/aprobacion-solicitudes.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* UserRequestsService */]) === "function" && _a || Object])
], AprobacionSolicitudesComponent);

var _a;
//# sourceMappingURL=aprobacion-solicitudes.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/cambio-password/cambio-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/cambio-password/cambio-password.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2>Cambio de password</h2>\r\n\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"myForm\"  class=\"form-horizontal\">\r\n    <!--<h4>Change Password Form</h4>-->\r\n    <hr />\r\n    <div class=\"text-danger\"></div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-3 control-label\">Password anterior</label>\r\n        <div class=\"col-md-9\">\r\n            <input type=\"password\" formControlName=\"oldPassword\" class=\"form-control\" />\r\n            <span asp-validation-for=\"OldPassword\" class=\"text-danger\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-3 control-label\">Password nuevo</label>\r\n        <div class=\"col-md-9\">\r\n            <input type=\"password\" formControlName=\"newPassword\" class=\"form-control\" />\r\n            <span asp-validation-for=\"NewPassword\" class=\"text-danger\"></span>\r\n        </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-3 control-label\">Confirmar password nuevo</label>\r\n        <div class=\"col-md-9\">\r\n            <input type=\"password\" formControlName=\"confirmPassword\" class=\"form-control\" />\r\n            <span asp-validation-for=\"ConfirmPassword\" class=\"text-danger\"></span>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"this.errorMessage\">\r\n        <p class=\"text-danger field-validation-valid\">{{this.errorMessage}}</p>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button type=\"submit\" class=\"btn btn-default\">Cambiar password</button>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/_components/cambio-password/cambio-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("../../../../../src/app/_services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CambioPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CambioPasswordComponent = (function () {
    function CambioPasswordComponent(router, http, _fb, userRequestsService) {
        this.router = router;
        this.http = http;
        this._fb = _fb;
        this.userRequestsService = userRequestsService;
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* FormGroup */]({
            oldPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](),
            newPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](),
            confirmPassword: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* FormControl */](),
        });
    }
    CambioPasswordComponent.prototype.ngOnInit = function () {
    };
    CambioPasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log("Submit");
        console.log(this.myForm.value);
        this.userRequestsService.postCambiarPassword(this.myForm.value)
            .subscribe(function (data) {
            if (data.success)
                _this.router.navigate(['PanelControl']);
            else
                _this.errorMessage = data.message;
        });
        //.catch(this.handleError);;
    };
    CambioPasswordComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    Object.defineProperty(CambioPasswordComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.myForm); },
        enumerable: true,
        configurable: true
    });
    CambioPasswordComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_4__angular_http__["g" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return CambioPasswordComponent;
}());
CambioPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-cambio-password',
        template: __webpack_require__("../../../../../src/app/_components/cambio-password/cambio-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/cambio-password/cambio-password.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */], __WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* HttpService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _d || Object])
], CambioPasswordComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cambio-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/certificacion/detalle-solicitud-certificacion/detalle-solicitud-certificacion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/certificacion/detalle-solicitud-certificacion/detalle-solicitud-certificacion.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Detalles de solicitud de certificación</h2>\r\n\r\n<div>\r\n\r\n    <hr />\r\n    <dl class=\"dl-horizontal\">\r\n        <dt>\r\n            Usuario solicitante\r\n        </dt>\r\n        <dd>\r\n            {{data.userName}}\r\n        </dd>\r\n\r\n        <dt>\r\n            Clave Pública\r\n        </dt>\r\n        <dd style=\"font-family:monospace;\">\r\n            {{data.formattedPublicKey}}\r\n        </dd>\r\n\r\n        <dt>\r\n            Fecha de creación\r\n        </dt>\r\n        <dd>\r\n            {{data.fechaCreacion}}\r\n        </dd>\r\n    </dl>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">Datos de la Solicitud de Firmado de Certificado (PKCS#10)</div>\r\n        <div class=\"panel-body\">\r\n            <dl class=\"dl-horizontal\">\r\n                <dt>\r\n                    Nombre común\r\n                </dt>\r\n                <dd>\r\n                    {{data.nombreComun}}\r\n                </dd>\r\n                <dt>\r\n                    Email\r\n                </dt>\r\n                <dd>\r\n                    {{data.email}}\r\n                </dd>\r\n                <dt>\r\n                    Organización\r\n                </dt>\r\n                <dd>\r\n                    {{data.organizacion}}\r\n                </dd>\r\n                <dt>\r\n                    Unidad organizacional\r\n                </dt>\r\n                <dd>\r\n                    {{data.unidadOrganizacional}}\r\n                </dd>\r\n                <dt>\r\n                    Localidad\r\n                </dt>\r\n                <dd>\r\n                    {{data.localidad}}\r\n                </dd>\r\n                <dt>\r\n                    Estado / Provincia\r\n                </dt>\r\n                <dd>\r\n                    {{data.estadoOProvincia}}\r\n                </dd>\r\n                <dt>\r\n                    País\r\n                </dt>\r\n                <dd>\r\n                    {{data.pais}}\r\n                </dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">Autoridad de Registro</div>\r\n        <div class=\"panel-body\">\r\n            <dl class=\"dl-horizontal\">\r\n                <dt>\r\n                    Usuario Aut. Registro\r\n                </dt>\r\n                <dd>\r\n                    {{data.usuarioVerificador}}\r\n                </dd>\r\n                <dt>\r\n                    Fecha de verificación\r\n                </dt>\r\n                <dd>\r\n                    {{data.fechaVerificacion}}\r\n                </dd>\r\n                <dt>\r\n                    Estado de verificación\r\n                </dt>\r\n                <dd>\r\n                    {{data.estadoVerificacion}}\r\n                </dd>\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div>\r\n    <form (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-horizontal\">\r\n            <input type=\"hidden\" name=\"id\" value=\"@Model.ClaveId\" />\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">1) Firme el CSR:</label>\r\n                <div class=\"col-md-10\">\r\n                    <a (click)=\"descargarCSR()\" class=\"btn btn-default\" role=\"button\">Descargar Certificate Signature Request</a>\r\n                    <span class=\"text-danger\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label class=\"col-md-2 control-label\">2) Cargue el certificado</label>\r\n                <div class=\"col-md-10\">\r\n                    <div class=\"input-group\">\r\n                        <label class=\"input-group-btn\">\r\n                            <span class=\"btn btn-primary\">\r\n                                Elegir certificado&hellip; <input type=\"file\" name=\"file\" style=\"display: none;\" accept=\".crt\" (change)=\"onChange($event)\" />\r\n                            </span>\r\n                        </label>\r\n                        <input type=\"text\" class=\"form-control\" readonly value=\"{{this.fileName}}\">\r\n                    </div>\r\n                    <span class=\"text-danger\"></span>\r\n\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-3\">\r\n                    <input type=\"submit\" value=\"Cargar certificado\" class=\"btn btn-default\" />\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div *ngIf=\"certificateLoadingErrorMessage != null\" class=\"alert alert-danger\">\r\n                        {{certificateLoadingErrorMessage}}.\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <a routerLink=\"/SolicitudesCertificacion\" class=\"btn btn-link\" role=\"button\">Volver a la lista</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/certificacion/detalle-solicitud-certificacion/detalle-solicitud-certificacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleSolicitudCertificacionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalleSolicitudCertificacionComponent = (function () {
    function DetalleSolicitudCertificacionComponent(router, userRequestsService, route) {
        this.router = router;
        this.userRequestsService = userRequestsService;
        this.route = route;
        this.data = {};
    }
    DetalleSolicitudCertificacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.userRequestsService.getSolicitudCertificacion(_this.id).subscribe(function (data) {
                console.log(data);
                _this.data = data;
            });
            ;
            // In a real app: dispatch action to load the details here.
        });
    };
    DetalleSolicitudCertificacionComponent.prototype.descargarCSR = function () {
        var _this = this;
        this.userRequestsService.getDescargarCSR(this.id)
            .subscribe(function (data) { return _this.downloadFile(data); }),
            function (//console.log(data),
                error) { return console.log("Error downloading the file."); },
            function () { return console.info("OK"); };
        //.toPromise()
        //.then(this.extractData)
        //.catch(this.handleError);;
    };
    DetalleSolicitudCertificacionComponent.prototype.downloadFile = function (data) {
        var fileName = this.getFileNameFromHttpResponse(data);
        var headers = data.headers;
        console.log(headers); //<--- Check log for content disposition
        var contentDisposition = headers.get('content-disposition');
        console.log(contentDisposition);
        console.log(data);
        var blob = new Blob([data.blob()], { type: 'application/x-msdownload' });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    DetalleSolicitudCertificacionComponent.prototype.getFileNameFromHttpResponse = function (httpResponse) {
        var contentDispositionHeader = httpResponse.headers.get('content-disposition');
        console.log(contentDispositionHeader);
        var result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
        return result.replace(/"/g, '');
    };
    DetalleSolicitudCertificacionComponent.prototype.onChange = function (event) {
        console.log(event.srcElement.files[0]);
        this.file = event.srcElement.files[0];
        this.fileName = this.file.name;
    };
    DetalleSolicitudCertificacionComponent.prototype.onSubmit = function () {
        var _this = this;
        //this.submitted = true;
        console.log("Submit");
        this.userRequestsService.patchCertificado(this.id, this.file)
            .subscribe(function (data) {
            var responseBody = data.json();
            if (data.ok && responseBody.success)
                _this.router.navigate(['SolicitudesCertificacion']);
            else if (data.ok && !responseBody.success)
                _this.certificateLoadingErrorMessage = responseBody.message;
        }),
            function (//console.log(data),
                error) { return console.log("Error downloading the file."); },
            function () { return console.info("OK"); };
        //.toPromise()
        //.then(this.extractData)
        //.catch(this.handleError);;
    };
    return DetalleSolicitudCertificacionComponent;
}());
DetalleSolicitudCertificacionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-detalle-solicitud-certificacion',
        template: __webpack_require__("../../../../../src/app/_components/certificacion/detalle-solicitud-certificacion/detalle-solicitud-certificacion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/certificacion/detalle-solicitud-certificacion/detalle-solicitud-certificacion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object])
], DetalleSolicitudCertificacionComponent);

var _a, _b, _c;
//# sourceMappingURL=detalle-solicitud-certificacion.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/certificacion/lista-solicitudes-certificacion/lista-solicitudes-certificacion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/certificacion/lista-solicitudes-certificacion/lista-solicitudes-certificacion.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Solicitudes de certificación</h2>\r\n\r\n<p>\r\n    Seleccione una clave\r\n</p>\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n\r\n            <th>\r\n                Usuario solicitante\r\n            </th>\r\n\r\n            <th>\r\n                Nombre identificativo\r\n            </th>\r\n\r\n            <th>\r\n                Fecha de creación\r\n            </th>\r\n\r\n            <th>\r\n                Usuario verificador\r\n            </th>\r\n\r\n\r\n\r\n\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        \r\n        <tr *ngFor=\"let solicitud of data\">\r\n            <td>\r\n                {{solicitud.userName}}\r\n            </td>\r\n            <td> \r\n                {{solicitud.nombreIdentificativo}}\r\n            </td>\r\n            <td>\r\n                {{solicitud.fechaCreacion}}\r\n            </td>\r\n            <td>\r\n                {{solicitud.usuarioVerificador}}\r\n            </td>\r\n            <td>\r\n                <a routerLink=\"/SolicitudesCertificacion/{{solicitud.claveId}}\">Detalles</a>\r\n            </td>\r\n        </tr>\r\n        \r\n    </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/_components/certificacion/lista-solicitudes-certificacion/lista-solicitudes-certificacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaSolicitudesCertificacionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListaSolicitudesCertificacionComponent = (function () {
    function ListaSolicitudesCertificacionComponent(userRequestsService) {
        this.userRequestsService = userRequestsService;
        this.data = {};
    }
    ListaSolicitudesCertificacionComponent.prototype.ngOnInit = function () {
        this.getClaves();
    };
    ListaSolicitudesCertificacionComponent.prototype.getData = function () {
        return this.userRequestsService.getListaSolicitudesCertificacion();
    };
    ListaSolicitudesCertificacionComponent.prototype.getClaves = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    return ListaSolicitudesCertificacionComponent;
}());
ListaSolicitudesCertificacionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-lista-solicitudes-certificacion',
        template: __webpack_require__("../../../../../src/app/_components/certificacion/lista-solicitudes-certificacion/lista-solicitudes-certificacion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/certificacion/lista-solicitudes-certificacion/lista-solicitudes-certificacion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* UserRequestsService */]) === "function" && _a || Object])
], ListaSolicitudesCertificacionComponent);

var _a;
//# sourceMappingURL=lista-solicitudes-certificacion.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/detalle-solicitud-aprobacion/detalle-solicitud-aprobacion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/detalle-solicitud-aprobacion/detalle-solicitud-aprobacion.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Detalles de solicitud</h2>\r\n\r\n<div>\r\n    <hr />\r\n    <dl class=\"dl-horizontal\">\r\n        <dt>\r\n            Usuario solicitante\r\n        </dt>\r\n        <dd>\r\n            {{this.keyDetails.userName}}\r\n        </dd>\r\n\r\n        <dt>\r\n            Clave Pública\r\n        </dt>\r\n        <dd style=\"font-family:monospace;\">\r\n            {{this.keyDetails.formattedPublicKey}}\r\n        </dd>\r\n\r\n        <dt>\r\n            Fecha de creación\r\n        </dt>\r\n        <dd>\r\n            {{this.keyDetails.fechaCreacion}}\r\n        </dd>\r\n    </dl>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">Datos de la Solicitud de Firmado de Certificado (PKCS#10)</div>\r\n        <div class=\"panel-body\">\r\n            <dl class=\"dl-horizontal\">\r\n                <dt>\r\n                    Nombre común\r\n                </dt>\r\n                <dd>\r\n                    {{this.keyDetails.nombreComun}}\r\n                </dd>\r\n                <dt>\r\n                    Email\r\n                </dt>\r\n                <dd>\r\n                    {{this.keyDetails.email}}\r\n                </dd>\r\n                <dt>\r\n                    Organización\r\n                </dt>\r\n                <dd>\r\n                    {{this.keyDetails.organizacion}}\r\n                </dd>\r\n                <dt>\r\n                    Unidad Organizacional\r\n                </dt>\r\n                <dd>\r\n                    {{this.keyDetails.unidadOrganizacional}}\r\n                </dd>\r\n\r\n\r\n                <dt>\r\n                    Localidad\r\n                </dt>\r\n                <dd>\r\n                    {{this.keyDetails.localidad}}\r\n                </dd>\r\n\r\n\r\n                <dt>\r\n                    Estado / Provincia\r\n                </dt>\r\n                <dd>\r\n                    {{this.keyDetails.estadoOProvincia}}\r\n                </dd>\r\n\r\n                <dt>\r\n                    Pais\r\n                </dt>\r\n                <dd>\r\n                    {{this.keyDetails.pais}}\r\n                </dd>\r\n\r\n\r\n\r\n\r\n\r\n            </dl>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div>\r\n    <a (click)=\"aprobar()\" class=\"btn btn-success\" role=\"button\">Aprobar</a>\r\n    <a (click)=\"rechazar()\" class=\"btn btn-danger\" role=\"button\">Rechazar</a>\r\n    <a routerLink=\"/AprobacionClavesNoCertificadas\" class=\"btn btn-link\" role=\"button\">Volver a la lista</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/detalle-solicitud-aprobacion/detalle-solicitud-aprobacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleSolicitudAprobacionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetalleSolicitudAprobacionComponent = (function () {
    function DetalleSolicitudAprobacionComponent(router, userRequestsService, route) {
        this.router = router;
        this.userRequestsService = userRequestsService;
        this.route = route;
        this.keyDetails = {};
    }
    DetalleSolicitudAprobacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.userRequestsService.getSolicitudAprobacion(_this.id).subscribe(function (data) {
                console.log(data);
                _this.keyDetails = data;
            });
            ;
            // In a real app: dispatch action to load the details here.
        });
    };
    DetalleSolicitudAprobacionComponent.prototype.aprobar = function () {
        var _this = this;
        this.userRequestsService.aprobarSolicitudAprobacion(this.id)
            .subscribe(function (data) {
            if (data.status == 200)
                _this.router.navigate(['AprobacionClavesNoCertificadas']);
        });
    };
    DetalleSolicitudAprobacionComponent.prototype.rechazar = function () {
        var _this = this;
        this.userRequestsService.rechazarSolicitudAprobacion(this.id)
            .subscribe(function (data) {
            if (data.status == 200)
                _this.router.navigate(['AprobacionClavesNoCertificadas']);
        });
    };
    return DetalleSolicitudAprobacionComponent;
}());
DetalleSolicitudAprobacionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-detalle-solicitud-aprobacion',
        template: __webpack_require__("../../../../../src/app/_components/detalle-solicitud-aprobacion/detalle-solicitud-aprobacion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/detalle-solicitud-aprobacion/detalle-solicitud-aprobacion.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _c || Object])
], DetalleSolicitudAprobacionComponent);

var _a, _b, _c;
//# sourceMappingURL=detalle-solicitud-aprobacion.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/firma-electronica/generar-firma-electronica/generar-firma-electronica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/firma-electronica/generar-firma-electronica/generar-firma-electronica.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Generar Firma Electronica</h2>\r\n\r\n<form (ngSubmit)=\"onSubmit(myForm.value, myForm.valid)\" [formGroup]=\"myForm\">\r\n    <div class=\"form-horizontal\">\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Clave</label>\r\n            <div class=\"col-md-10\">\r\n                <!--@Html.DropDownListFor(m => m.ClaveId, new SelectList(ViewBag.Claves, \"Key\", \"Value\"), \"Seleccione una clave\", new { @class = \"form-control\" })-->\r\n                <select class=\"form-control\" id=\"clave\" formControlName=\"ClaveId\">                    \r\n                    <option *ngFor=\"let clave of this.availableKeys\" value=\"{{clave.id}}\">{{clave.nombreIdentificativo}}</option>\r\n                </select>\r\n                <span class=\"text-danger\"></span>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Archivo</label>\r\n            <div class=\"col-md-10\">                \r\n                <div class=\"input-group\">\r\n                    <label class=\"input-group-btn\">\r\n                        <span class=\"btn btn-primary\">\r\n                            Elegir archivo&hellip; <input type=\"file\" name=\"Archivo\" style=\"display: none;\" formControlName=\"Archivo\" (change)=\"onChange($event)\">\r\n                        </span>\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" readonly value=\"{{this.fileName}}\">\r\n                </div>\r\n\r\n                <!--<input type=\"file\" name=\"Archivo\" formControlName=\"Archivo\" (change)=\"onChange($event)\">-->\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Contraseña</label>\r\n            <div class=\"col-md-10\">                \r\n                <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"Password\"/>                \r\n                <small id=\"fileHelp\" class=\"form-text text-muted\">Reingrese su contraseña para generar la firma electrónica</small>\r\n                <span class=\"text-danger\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <input type=\"submit\" value=\"Generar Firma Electrónica\" class=\"btn btn-default\" />\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</form>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/firma-electronica/generar-firma-electronica/generar-firma-electronica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_generar_firma_electronica_model__ = __webpack_require__("../../../../../src/app/_classes/generar-firma-electronica-model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerarFirmaElectronicaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GenerarFirmaElectronicaComponent = (function () {
    function GenerarFirmaElectronicaComponent(userRequestsService, _fb) {
        this.userRequestsService = userRequestsService;
        this._fb = _fb;
        this.myForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormGroup */]({
            ClaveId: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](),
            Archivo: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](),
            Password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormControl */](),
        });
    }
    GenerarFirmaElectronicaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRequestsService.getAvailableSigningKeys().subscribe(function (data) {
            console.log(data);
            _this.availableKeys = data;
        });
        ;
    };
    GenerarFirmaElectronicaComponent.prototype.onChange = function (event) {
        console.log(event.srcElement.files[0]);
        this.file = event.srcElement.files[0];
        this.fileName = this.file.name;
    };
    GenerarFirmaElectronicaComponent.prototype.onSubmit = function (model, isValid) {
        var _this = this;
        var reqModel = new __WEBPACK_IMPORTED_MODULE_4__classes_generar_firma_electronica_model__["a" /* GenerarFirmaElectronicaModel */](model.ClaveId, this.file, model.Password);
        console.log(reqModel);
        model.Archivo = this.file;
        this.submitted = true;
        console.log("Submit");
        this.userRequestsService.postGenerarFirmaElectronica(model)
            .subscribe(function (data) { return _this.downloadFile(data); }),
            function (//console.log(data),
                error) { return console.log("Error downloading the file."); },
            function () { return console.info("OK"); };
        //.toPromise()
        //.then(this.extractData)
        //.catch(this.handleError);;
    };
    GenerarFirmaElectronicaComponent.prototype.downloadFile = function (data) {
        var fileName = this.getFileNameFromHttpResponse(data);
        var headers = data.headers;
        //console.log(headers); //<--- Check log for content disposition
        var contentDisposition = headers.get('content-disposition');
        console.log(contentDisposition);
        var blob = new Blob([data.blob()], { type: 'text/csv' });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    GenerarFirmaElectronicaComponent.prototype.getFileNameFromHttpResponse = function (httpResponse) {
        var contentDispositionHeader = httpResponse.headers.get('content-disposition');
        console.log(contentDispositionHeader);
        var result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
        return result.replace(/"/g, '');
    };
    GenerarFirmaElectronicaComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    //get diagnostic() { return JSON.stringify(this.model); }
    GenerarFirmaElectronicaComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_3__angular_http__["g" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return GenerarFirmaElectronicaComponent;
}());
GenerarFirmaElectronicaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-generar-firma-electronica',
        template: __webpack_require__("../../../../../src/app/_components/firma-electronica/generar-firma-electronica/generar-firma-electronica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/firma-electronica/generar-firma-electronica/generar-firma-electronica.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormBuilder */]) === "function" && _b || Object])
], GenerarFirmaElectronicaComponent);

var _a, _b;
//# sourceMappingURL=generar-firma-electronica.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/firma-electronica/verificar-firma-electronica/verificar-firma-electronica.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/firma-electronica/verificar-firma-electronica/verificar-firma-electronica.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Verificar Firma Electronica</h2>\r\n\r\n<form (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-horizontal\">\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Archivo</label>\r\n            <div class=\"col-md-10\">\r\n                <div class=\"input-group\">\r\n                    <label class=\"input-group-btn\">\r\n                        <span class=\"btn btn-primary\">\r\n                            Elegir archivo&hellip; <input type=\"file\" name=\"Archivo\" style=\"display: none;\" (change)=\"onChangeArchivo($event)\">\r\n                        </span>\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" readonly value=\"{{this.fileName}}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\">Firma Electrónica</label>\r\n            <div class=\"col-md-10\">\r\n                <div class=\"input-group\">\r\n                    <label class=\"input-group-btn\">\r\n                        <span class=\"btn btn-primary\">\r\n                            Elegir archivo&hellip; <input type=\"file\" name=\"ArchivoFirmaElectronica\" style=\"display: none;\" (change)=\"onChangeFirmaElectronica($event)\">\r\n                        </span>\r\n                    </label>\r\n                    <input type=\"text\" class=\"form-control\" readonly value=\"{{this.digitalSignatureFileName}}\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <input type=\"submit\" value=\"Verificar\" class=\"btn btn-default\" />\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n\r\n\r\n<div *ngIf=\"this.resultadoVerificacion != null && this.resultadoVerificacion.result == true\">\r\n\r\n    <div class=\"alert alert-success\" role=\"alert\">\r\n        <span class=\"glyphicon glyphicon-ok\" aria-hidden=\"true\"></span>\r\n        El archivo es auténtico, verifica con la firma electrónica.\r\n    </div>\r\n\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">Datos del archivo</div>\r\n        <div class=\"panel-body\">\r\n            <dl>\r\n                <dt>\r\n                    Nombre\r\n                </dt>\r\n                <dd>\r\n                    {{this.resultadoVerificacion.fileName}}\r\n                </dd>\r\n                <dt>\r\n                    Tamaño\r\n                </dt>\r\n                <dd>\r\n                    {{this.resultadoVerificacion.fileSize}} bytes\r\n                </dd>\r\n                <dt>\r\n                    Hash\r\n                </dt>\r\n                <dd>\r\n                    {{this.resultadoVerificacion.fileHash}}\r\n                </dd>\r\n            </dl>\r\n\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">Datos del firmante</div>\r\n        <div class=\"panel-body\">\r\n            <dl>\r\n                <dt>\r\n                    Nombre común\r\n                </dt>\r\n                <dd>\r\n                    {{this.resultadoVerificacion.subject.cn}}\r\n                </dd>\r\n\r\n                <dt>\r\n                    Unidad organizacional\r\n                </dt>\r\n                <dd>\r\n                    {{this.resultadoVerificacion.subject.ou}}\r\n                </dd>\r\n\r\n                <dt>\r\n                    Organización\r\n                </dt>\r\n                <dd>\r\n                    {{this.resultadoVerificacion.subject.o}}\r\n                </dd>\r\n\r\n                <dt>\r\n                    Provincia/Estado\r\n                </dt>\r\n                <dd>\r\n                    {{this.resultadoVerificacion.subject.s}}\r\n                </dd>\r\n\r\n                <dt>\r\n                    País\r\n                </dt>\r\n                <dd>\r\n                    {{this.resultadoVerificacion.subject.c}}\r\n                </dd>\r\n            </dl>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"this.resultadoVerificacion != null && this.resultadoVerificacion.result == false\">\r\n    <div class=\"alert alert-danger\" role=\"alert\">\r\n        <span class=\"glyphicon glyphicon-alert\" aria-hidden=\"true\"></span>\r\n        El archivo fue alterado, no verifica con la firma electrónica.\r\n    </div>\r\n</div>\r\n\r\n<div *ngIf=\"this.resultadoVerificacion != null && this.resultadoVerificacion.result == false\">\r\n    <div class=\"alert alert-danger\" role=\"alert\">\r\n        <span class=\"glyphicon glyphicon-alert\" aria-hidden=\"true\"></span>\r\n        El archivo fue alterado, no verifica con la firma electrónica.\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/firma-electronica/verificar-firma-electronica/verificar-firma-electronica.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_verificar_firma_electronica_model__ = __webpack_require__("../../../../../src/app/_classes/verificar-firma-electronica-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificarFirmaElectronicaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VerificarFirmaElectronicaComponent = (function () {
    function VerificarFirmaElectronicaComponent(userRequestsService, modalService) {
        this.userRequestsService = userRequestsService;
        this.modalService = modalService;
    }
    VerificarFirmaElectronicaComponent.prototype.ngOnInit = function () {
    };
    VerificarFirmaElectronicaComponent.prototype.onChangeArchivo = function (event) {
        console.log(event.srcElement.files);
        this.file = event.srcElement.files[0];
        this.fileName = this.file.name;
    };
    VerificarFirmaElectronicaComponent.prototype.onChangeFirmaElectronica = function (event) {
        var re = /(?:\.([^.]+))?$/;
        var ext = re.exec(event.srcElement.files[0].name)[1]; // "txt"
        if (ext != "frm") {
            console.log("error");
            return;
        }
        console.log(event.srcElement.files[0]);
        this.digitalSignatureFile = event.srcElement.files[0];
        this.digitalSignatureFileName = this.digitalSignatureFile.name;
    };
    VerificarFirmaElectronicaComponent.prototype.onSubmit = function () {
        var _this = this;
        var reqModel = new __WEBPACK_IMPORTED_MODULE_1__classes_verificar_firma_electronica_model__["a" /* VerificarFirmaElectronicaModel */](this.file, this.digitalSignatureFile);
        console.log(reqModel);
        this.userRequestsService.postVerificarFirmaElectronica(reqModel)
            .subscribe(function (data) {
            _this.resultadoVerificacion = data;
        }),
            function (//console.log(data),
                error) { return console.log("Error downloading the file."); },
            function () { return console.info("OK"); };
        //.toPromise()
        //.then(this.extractData)
        //.catch(this.handleError);;
    };
    VerificarFirmaElectronicaComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    VerificarFirmaElectronicaComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return VerificarFirmaElectronicaComponent;
}());
VerificarFirmaElectronicaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-verificar-firma-electronica',
        template: __webpack_require__("../../../../../src/app/_components/firma-electronica/verificar-firma-electronica/verificar-firma-electronica.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/firma-electronica/verificar-firma-electronica/verificar-firma-electronica.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
], VerificarFirmaElectronicaComponent);

var _a, _b;
//# sourceMappingURL=verificar-firma-electronica.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/panel-control/configuracion-codigo-temporal/configuracion-codigo-temporal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/panel-control/configuracion-codigo-temporal/configuracion-codigo-temporal.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Configuración de verificación de dos pasos</h2>\r\n<hr />\r\n\r\n<div class=\"container\">\r\n    <p>1) Descargue <span style=\"font-weight: bold;\">Google Authenticator</span> en su dispositivo móvil para generar códigos de acceso.</p>\r\n                <a href=\"https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2\"><img src=\"{{googlePlayImagePath}}\" height=\"50\" /></a>\r\n                <a href=\"https://itunes.apple.com/us/app/google-authenticator/id388497605?mt=8\"><img src=\"{{appStoreImagePath}}\" height=\"50\" /></a>\r\n    \r\n    <p>2) Use Google Authenticator para leer el siguiente código QR:</p>\r\n    <div>\r\n        <qr-code [value]=\"this.keyUri\" [size]=\"200\"></qr-code>\r\n    </div>\r\n\r\n\r\n    \r\n    <p class=\"\">{{this.newSecret}}</p>\r\n\r\n</div>\r\n\r\n<form (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\r\n    \r\n    <div class=\"text-danger\"></div>\r\n    <div class=\"form-group\">\r\n        <label class=\"col-md-3 control-label\">Código</label>\r\n        <div class=\"col-md-9\">\r\n            <input type=\"number\" [(ngModel)]=\"this.model.code\" name=\"code\" class=\"form-control\" />\r\n            <span asp-validation-for=\"OldPassword\" class=\"text-danger\"></span>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"col-md-offset-2 col-md-10\">\r\n            <button type=\"submit\" class=\"btn btn-default\">Verificar</button>\r\n        </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/_components/panel-control/configuracion-codigo-temporal/configuracion-codigo-temporal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracionCodigoTemporalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfiguracionCodigoTemporalComponent = (function () {
    function ConfiguracionCodigoTemporalComponent(router, userRequestsService, _authenticationService) {
        this.router = router;
        this.userRequestsService = userRequestsService;
        this._authenticationService = _authenticationService;
        this.model = {};
        this.appStoreImagePath = '/assets/img/app-store.jpg';
        this.googlePlayImagePath = '/assets/img/google-play.png';
    }
    ConfiguracionCodigoTemporalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userRequestsService.getNewTotpSecret()
            .subscribe(function (data) {
            _this.newSecret = data.secret;
            _this.keyUri = "otpauth://totp/ProyectoGrado_SFE:" + _this._authenticationService.UserName + "?secret=" + _this.newSecret.replace(/\s/g, '') + "&issuer=ProyectoGrado_SFE";
        });
    };
    ConfiguracionCodigoTemporalComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        console.log("Submit");
        console.log(this.model.code);
        this.userRequestsService.postNewTotpSecret(this.newSecret, this.model.code)
            .subscribe(function (data) {
            if (data.success)
                _this.router.navigate(['PanelControl']);
        });
        //.catch(this.handleError);;
    };
    return ConfiguracionCodigoTemporalComponent;
}());
ConfiguracionCodigoTemporalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-configuracion-codigo-temporal',
        template: __webpack_require__("../../../../../src/app/_components/panel-control/configuracion-codigo-temporal/configuracion-codigo-temporal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/panel-control/configuracion-codigo-temporal/configuracion-codigo-temporal.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object])
], ConfiguracionCodigoTemporalComponent);

var _a, _b, _c;
//# sourceMappingURL=configuracion-codigo-temporal.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/panel-control/panel-control.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/panel-control/panel-control.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2>Panel de control</h2>\r\n<!--<p class=\"text-success\">@ViewData[\"StatusMessage\"]</p>-->\r\n\r\n<div>    \r\n    <hr />\r\n    <dl class=\"dl-horizontal\">\r\n        <dt>Password:</dt>\r\n        <dd>            \r\n            <a routerLink=\"/PanelControl/CambioPassword\" class=\"btn-bracketed\">Cambiar password</a>            \r\n            <!--else\r\n            {\r\n            <a asp-controller=\"Manage\" asp-action=\"SetPassword\" class=\"btn-bracketed\">Create</a>\r\n            }-->\r\n        </dd>\r\n        <dt>Verificación de dos pasos</dt>\r\n        <dd>\r\n            <a routerLink=\"/PanelControl/ConfiguracionCodigoTemporal\" class=\"btn-bracketed\">Configuración de verificación de dos pasos</a>\r\n        </dd>\r\n        <!--<dt>External Logins:</dt>\r\n        <dd>\r\n\r\n            @Model.Logins.Count <a asp-controller=\"Manage\" asp-action=\"ManageLogins\" class=\"btn-bracketed\">Manage</a>\r\n        </dd>\r\n        <dt>Phone Number:</dt>\r\n        <dd>\r\n            <p>\r\n                Phone Numbers can be used as a second factor of verification in two-factor authentication.\r\n                See <a href=\"https://go.microsoft.com/fwlink/?LinkID=532713\">this article</a>\r\n                for details on setting up this ASP.NET application to support two-factor authentication using SMS.\r\n            </p>\r\n            @*@(Model.PhoneNumber ?? \"None\")\r\n            @if (Model.PhoneNumber != null)\r\n            {\r\n            <br />\r\n            <a asp-controller=\"Manage\" asp-action=\"AddPhoneNumber\" class=\"btn-bracketed\">Change</a>\r\n            <form asp-controller=\"Manage\" asp-action=\"RemovePhoneNumber\" method=\"post\">\r\n                [<button type=\"submit\" class=\"btn-link\">Remove</button>]\r\n            </form>\r\n            }\r\n            else\r\n            {\r\n            <a asp-controller=\"Manage\" asp-action=\"AddPhoneNumber\" class=\"btn-bracketed\">Add</a>\r\n            }*@\r\n        </dd>-->\r\n\r\n        <!--<dt>Two-Factor Authentication:</dt>\r\n        <dd>\r\n            <p>\r\n                There are no two-factor authentication providers configured. See <a href=\"https://go.microsoft.com/fwlink/?LinkID=532713\">this article</a>\r\n                for setting up this application to support two-factor authentication.\r\n            </p>\r\n            @*@if (Model.TwoFactor)\r\n            {\r\n            <form asp-controller=\"Manage\" asp-action=\"DisableTwoFactorAuthentication\" method=\"post\" class=\"form-horizontal\">\r\n                Enabled <button type=\"submit\" class=\"btn-link btn-bracketed\">Disable</button>\r\n            </form>\r\n            }\r\n            else\r\n            {\r\n            <form asp-controller=\"Manage\" asp-action=\"EnableTwoFactorAuthentication\" method=\"post\" class=\"form-horizontal\">\r\n                <button type=\"submit\" class=\"btn-link btn-bracketed\">Enable</button> Disabled\r\n            </form>\r\n            }*@\r\n        </dd>-->\r\n    </dl>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/panel-control/panel-control.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelControlComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelControlComponent = (function () {
    function PanelControlComponent() {
    }
    PanelControlComponent.prototype.ngOnInit = function () {
    };
    return PanelControlComponent;
}());
PanelControlComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-panel-control',
        template: __webpack_require__("../../../../../src/app/_components/panel-control/panel-control.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/panel-control/panel-control.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PanelControlComponent);

//# sourceMappingURL=panel-control.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/recuperacion-password-request/recuperacion-password-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/recuperacion-password-request/recuperacion-password-request.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Recuperación de contraseña</h2>\r\n    <div *ngIf=\"!success\">\r\n        <form class=\"form-horizontal\" (ngSubmit)=\"submit()\" #f=\"ngForm\">\r\n            <h4>Ingrese su correo electrónico.</h4>\r\n            <hr />\r\n            <div asp-validation-summary=\"All\" class=\"text-danger\"></div>\r\n            <div class=\"form-group\">\r\n                <label asp-for=\"Email\" class=\"col-md-2 control-label\"></label>\r\n                <div class=\"col-md-10\">\r\n                    <input [(ngModel)]=\"this.emailModel\" class=\"form-control\" name=\"email\" />\r\n                    <span asp-validation-for=\"Email\" class=\"text-danger\"></span>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-2 col-md-10\">\r\n                    <button type=\"submit\" class=\"btn btn-default\">Recuperar</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div *ngIf=\"submitted && success\">\r\n        <p>Un link de recuperación de contraseña fue enviado a su correo electrónico.</p>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/recuperacion-password-request/recuperacion-password-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperacionPasswordRequestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecuperacionPasswordRequestComponent = (function () {
    function RecuperacionPasswordRequestComponent(userRequestsService) {
        this.userRequestsService = userRequestsService;
    }
    RecuperacionPasswordRequestComponent.prototype.ngOnInit = function () {
    };
    RecuperacionPasswordRequestComponent.prototype.submit = function () {
        var _this = this;
        this.submitted = true;
        this.userRequestsService.postForgotPasswordRequest(this.emailModel)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.success = data.success;
        });
    };
    return RecuperacionPasswordRequestComponent;
}());
RecuperacionPasswordRequestComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-recuperacion-password-request',
        template: __webpack_require__("../../../../../src/app/_components/recuperacion-password-request/recuperacion-password-request.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/recuperacion-password-request/recuperacion-password-request.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _a || Object])
], RecuperacionPasswordRequestComponent);

var _a;
//# sourceMappingURL=recuperacion-password-request.component.js.map

/***/ }),

/***/ "../../../../../src/app/_components/recuperacion-password/recuperacion-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_components/recuperacion-password/recuperacion-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Recuperación de contraseña</h2>\r\n\r\n    <form (ngSubmit)=\"submitRecoverModel()\" class=\"form-horizontal\">\r\n        <hr />\r\n        <div class=\"text-danger\"></div>        \r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-3 control-label\">Password nuevo</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"password\" [(ngModel)]=\"this.recoverModel.password\" name=\"newPassword\" class=\"form-control\" />\r\n                <span asp-validation-for=\"NewPassword\" class=\"text-danger\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-3 control-label\">Confirmar password nuevo</label>\r\n            <div class=\"col-md-9\">\r\n                <input type=\"password\" [(ngModel)]=\"this.recoverModel.confirmPassword\" name=\"confirmPassword\" class=\"form-control\" />\r\n                <span asp-validation-for=\"ConfirmPassword\" class=\"text-danger\"></span>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <button type=\"submit\" class=\"btn btn-default\">Cambiar password</button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n"

/***/ }),

/***/ "../../../../../src/app/_components/recuperacion-password/recuperacion-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperacionPasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecuperacionPasswordComponent = (function () {
    function RecuperacionPasswordComponent(userRequestsService, activatedRoute) {
        this.userRequestsService = userRequestsService;
        this.activatedRoute = activatedRoute;
        this.recoverModel = {};
    }
    RecuperacionPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.recoverModel.code = params['code'];
            _this.recoverModel.email = params['email'];
        });
    };
    RecuperacionPasswordComponent.prototype.submitRecoverModel = function () {
        var _this = this;
        this.submitted = true;
        this.userRequestsService.postForgotPassword(this.recoverModel)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            _this.success = data.success;
        });
    };
    return RecuperacionPasswordComponent;
}());
RecuperacionPasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-recuperacion-password',
        template: __webpack_require__("../../../../../src/app/_components/recuperacion-password/recuperacion-password.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_components/recuperacion-password/recuperacion-password.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], RecuperacionPasswordComponent);

var _a, _b;
//# sourceMappingURL=recuperacion-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        // set token if saved in local storage        
        try {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        catch (e) {
            console.log(e);
        }
        console.log(currentUser);
        if (currentUser != null) {
            this.AuthToken = currentUser.auth_token;
            this.UserName = currentUser.username;
            this.Role = currentUser.role;
            this.IsLoggedIn = true;
        }
        else
            this.IsLoggedIn = false;
    }
    AuthenticationService.prototype.LogIn = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:5000/api/auth/login', JSON.stringify({ userName: username, password: password }), options)
            .map(function (response) {
            var res = response.json();
            if (res.success && res.auth_token) {
                _this.AuthToken = res.auth_token;
                if (!res.twostep_required) {
                    console.log("storing");
                    console.log(res);
                    localStorage.setItem('currentUser', JSON.stringify(res));
                    _this.UserName = res.username;
                    _this.Role = res.role;
                    _this.IsLoggedIn = true;
                }
                return { twostep_required: res.twostep_required };
            }
            else
                return res;
        });
        //.map((response: Response) => {              
        //    // login successful if there's a jwt token in the response              
        //    let user = response.json();              
        //    if (user && user.auth_token) {
        //        // store user details and jwt token in local storage to keep user logged in between page refreshes                  
        //        this.AuthToken = user.auth_token;                  
        //    }
        //    if (!user.twostep_required) {
        //        localStorage.setItem('currentUser', JSON.stringify(user));
        //        this.UserName = user.username;
        //        this.Role = user.role;
        //        this.IsLoggedIn = true;
        //    }
        //    return { twostep_required: user.twostep_required };
        //});
    };
    AuthenticationService.prototype.SendTwoStepCode = function (code) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append("Content-Type", "application/json");
        headers.append('Authorization', "Bearer " + this.AuthToken);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:5000/api/auth/login/2fa', JSON.stringify({ code: code }), options)
            .map(function (response) {
            // login successful if there's a jwt token in the response              
            var res = response.json();
            if (res.success) {
                if (res && res.auth_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(res));
                    console.log("res");
                    console.log(res);
                    _this.AuthToken = res.auth_token;
                    _this.UserName = res.username;
                    _this.Role = res.role;
                    _this.IsLoggedIn = true;
                }
            }
            return res;
        });
    };
    AuthenticationService.prototype.LogOut = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.AuthToken = null;
        this.Role = null;
        this.UserName = null;
        this.IsLoggedIn = false;
        this.router.navigate(['Login']);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, router, authService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.router = router;
        _this.authService = authService;
        _this.apiUrl = 'http://localhost:5000/api/';
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        var token = this.authService.AuthToken;
        if (typeof url === 'string') {
            if (!options) {
                // let's make option object
                options = { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]() };
            }
            options.headers.set('Authorization', "Bearer " + token);
        }
        else {
            // we have to add the token to the url object
            url.headers.set('Authorization', "Bearer " + token);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchErrors());
    };
    HttpService.prototype.catchErrors = function () {
        var _this = this;
        return function (res) {
            if (res.status === 401 || res.status === 403) {
                //handle authorization errors
                //in this example I am navigating to logout route which brings the login screen
                _this.authService.LogOut();
            }
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(res);
        };
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* XHRBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* XHRBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__authentication_service__["a" /* AuthenticationService */]) === "function" && _d || Object])
], HttpService);

var _a, _b, _c, _d;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__user_requests_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/_services/http.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__http_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_services/user-requests.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__("../../../../../src/app/_services/http.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRequestsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        return this.http.post('http://localhost:5000/api/FirmaElectronica/Generar', input, { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob });
    };
    UserRequestsService.prototype.postVerificarFirmaElectronica = function (model) {
        var input = new FormData();
        input.append('Archivo', model.Archivo);
        input.append('ArchivoFirmaElectronica', model.ArchivoFirmaElectronica);
        return this.http.post('http://localhost:5000/api/FirmaElectronica/Verificar', input)
            .map(function (response) { return response.json(); });
    };
    UserRequestsService.prototype.getDescargarCertificado = function (id) {
        return this.http.get('http://localhost:5000/api/Claves/' + id + '/Certificado', { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob });
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
        return this.http.get('http://localhost:5000/api/SolicitudesCertificacion/' + id + '/DescargarCSR', { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], UserRequestsService);

var _a, _b;
//# sourceMappingURL=user-requests.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\r\n<div class=\"container-fluid body-content\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-md-2\">\r\n      <nav></nav>\r\n    </div>\r\n    <div class=\"col-sm-9 col-md-8\">\r\n      <router-outlet></router-outlet>                      \r\n    </div>\r\n  </div>\r\n  <hr />\r\n\r\n</div>\r\n<footer class=\"\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-9 col-sm-10 col-sm-offset-3 col-md-offset-2\">\r\n                <div>\r\n\r\n                    <p>2017 - Nicolás Valenzuela - Proyecto de grado: Sistema de Firma Electrónica con Encriptación de Curva Elíptica</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__claves_claves_component__ = __webpack_require__("../../../../../src/app/claves/claves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nuevo_par_claves_nuevo_par_claves_component__ = __webpack_require__("../../../../../src/app/nuevo-par-claves/nuevo-par-claves.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_form_login_form_component__ = __webpack_require__("../../../../../src/app/login-form/login-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__clave_detalles_clave_detalles_component__ = __webpack_require__("../../../../../src/app/clave-detalles/clave-detalles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_firma_electronica_generar_firma_electronica_generar_firma_electronica_component__ = __webpack_require__("../../../../../src/app/_components/firma-electronica/generar-firma-electronica/generar-firma-electronica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_firma_electronica_verificar_firma_electronica_verificar_firma_electronica_component__ = __webpack_require__("../../../../../src/app/_components/firma-electronica/verificar-firma-electronica/verificar-firma-electronica.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_aprobacion_solicitudes_aprobacion_solicitudes_component__ = __webpack_require__("../../../../../src/app/_components/aprobacion-solicitudes/aprobacion-solicitudes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_detalle_solicitud_aprobacion_detalle_solicitud_aprobacion_component__ = __webpack_require__("../../../../../src/app/_components/detalle-solicitud-aprobacion/detalle-solicitud-aprobacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_certificacion_lista_solicitudes_certificacion_lista_solicitudes_certificacion_component__ = __webpack_require__("../../../../../src/app/_components/certificacion/lista-solicitudes-certificacion/lista-solicitudes-certificacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_certificacion_detalle_solicitud_certificacion_detalle_solicitud_certificacion_component__ = __webpack_require__("../../../../../src/app/_components/certificacion/detalle-solicitud-certificacion/detalle-solicitud-certificacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_panel_control_panel_control_component__ = __webpack_require__("../../../../../src/app/_components/panel-control/panel-control.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_cambio_password_cambio_password_component__ = __webpack_require__("../../../../../src/app/_components/cambio-password/cambio-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_panel_control_configuracion_codigo_temporal_configuracion_codigo_temporal_component__ = __webpack_require__("../../../../../src/app/_components/panel-control/configuracion-codigo-temporal/configuracion-codigo-temporal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__node_modules_angular2_qrcode__ = __webpack_require__("../../../../angular2-qrcode/lib/angular2-qrcode.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_administrador_crear_usuario_crear_usuario_component__ = __webpack_require__("../../../../../src/app/_components/administrador/crear-usuario/crear-usuario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_administrador_auditoria_firmas_electronicas_auditoria_firmas_electronicas_component__ = __webpack_require__("../../../../../src/app/_components/administrador/auditoria-firmas-electronicas/auditoria-firmas-electronicas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_administrador_lista_usuarios_lista_usuarios_component__ = __webpack_require__("../../../../../src/app/_components/administrador/lista-usuarios/lista-usuarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_recuperacion_password_recuperacion_password_component__ = __webpack_require__("../../../../../src/app/_components/recuperacion-password/recuperacion-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_recuperacion_password_request_recuperacion_password_request_component__ = __webpack_require__("../../../../../src/app/_components/recuperacion-password-request/recuperacion-password-request.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: 'Claves', component: __WEBPACK_IMPORTED_MODULE_8__claves_claves_component__["a" /* ClavesComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_10__login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'Claves/NuevoPar', component: __WEBPACK_IMPORTED_MODULE_9__nuevo_par_claves_nuevo_par_claves_component__["a" /* NuevoParClavesComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_form_login_form_component__["a" /* LoginFormComponent */] },
    { path: 'Claves/:id', component: __WEBPACK_IMPORTED_MODULE_12__clave_detalles_clave_detalles_component__["a" /* ClaveDetallesComponent */] },
    { path: 'FirmaElectronica/Generar', component: __WEBPACK_IMPORTED_MODULE_13__components_firma_electronica_generar_firma_electronica_generar_firma_electronica_component__["a" /* GenerarFirmaElectronicaComponent */] },
    { path: 'FirmaElectronica/Verificar', component: __WEBPACK_IMPORTED_MODULE_14__components_firma_electronica_verificar_firma_electronica_verificar_firma_electronica_component__["a" /* VerificarFirmaElectronicaComponent */] },
    { path: 'AprobacionClavesNoCertificadas', component: __WEBPACK_IMPORTED_MODULE_15__components_aprobacion_solicitudes_aprobacion_solicitudes_component__["a" /* AprobacionSolicitudesComponent */] },
    { path: 'AprobacionClavesNoCertificadas/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_detalle_solicitud_aprobacion_detalle_solicitud_aprobacion_component__["a" /* DetalleSolicitudAprobacionComponent */] },
    { path: 'SolicitudesCertificacion', component: __WEBPACK_IMPORTED_MODULE_17__components_certificacion_lista_solicitudes_certificacion_lista_solicitudes_certificacion_component__["a" /* ListaSolicitudesCertificacionComponent */] },
    { path: 'SolicitudesCertificacion/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_certificacion_detalle_solicitud_certificacion_detalle_solicitud_certificacion_component__["a" /* DetalleSolicitudCertificacionComponent */] },
    { path: 'PanelControl', component: __WEBPACK_IMPORTED_MODULE_19__components_panel_control_panel_control_component__["a" /* PanelControlComponent */] },
    { path: 'PanelControl/CambioPassword', component: __WEBPACK_IMPORTED_MODULE_20__components_cambio_password_cambio_password_component__["a" /* CambioPasswordComponent */] },
    { path: 'PanelControl/ConfiguracionCodigoTemporal', component: __WEBPACK_IMPORTED_MODULE_21__components_panel_control_configuracion_codigo_temporal_configuracion_codigo_temporal_component__["a" /* ConfiguracionCodigoTemporalComponent */] },
    { path: 'Usuarios', component: __WEBPACK_IMPORTED_MODULE_25__components_administrador_lista_usuarios_lista_usuarios_component__["a" /* ListaUsuariosComponent */] },
    { path: 'Usuarios/Crear', component: __WEBPACK_IMPORTED_MODULE_23__components_administrador_crear_usuario_crear_usuario_component__["a" /* CrearUsuarioComponent */] },
    { path: 'AuditoriaFirmasElectronicas', component: __WEBPACK_IMPORTED_MODULE_24__components_administrador_auditoria_firmas_electronicas_auditoria_firmas_electronicas_component__["a" /* AuditoriaFirmasElectronicasComponent */] },
    { path: 'RecuperacionPassword', component: __WEBPACK_IMPORTED_MODULE_27__components_recuperacion_password_request_recuperacion_password_request_component__["a" /* RecuperacionPasswordRequestComponent */] },
    { path: 'RecuperacionPasswordConfirmacion', component: __WEBPACK_IMPORTED_MODULE_26__components_recuperacion_password_recuperacion_password_component__["a" /* RecuperacionPasswordComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__claves_claves_component__["a" /* ClavesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nuevo_par_claves_nuevo_par_claves_component__["a" /* NuevoParClavesComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_form_login_form_component__["a" /* LoginFormComponent */],
            __WEBPACK_IMPORTED_MODULE_12__clave_detalles_clave_detalles_component__["a" /* ClaveDetallesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_firma_electronica_generar_firma_electronica_generar_firma_electronica_component__["a" /* GenerarFirmaElectronicaComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_firma_electronica_verificar_firma_electronica_verificar_firma_electronica_component__["a" /* VerificarFirmaElectronicaComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_aprobacion_solicitudes_aprobacion_solicitudes_component__["a" /* AprobacionSolicitudesComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_detalle_solicitud_aprobacion_detalle_solicitud_aprobacion_component__["a" /* DetalleSolicitudAprobacionComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_certificacion_lista_solicitudes_certificacion_lista_solicitudes_certificacion_component__["a" /* ListaSolicitudesCertificacionComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_certificacion_detalle_solicitud_certificacion_detalle_solicitud_certificacion_component__["a" /* DetalleSolicitudCertificacionComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_panel_control_panel_control_component__["a" /* PanelControlComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_cambio_password_cambio_password_component__["a" /* CambioPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_panel_control_configuracion_codigo_temporal_configuracion_codigo_temporal_component__["a" /* ConfiguracionCodigoTemporalComponent */],
            __WEBPACK_IMPORTED_MODULE_23__components_administrador_crear_usuario_crear_usuario_component__["a" /* CrearUsuarioComponent */],
            __WEBPACK_IMPORTED_MODULE_24__components_administrador_auditoria_firmas_electronicas_auditoria_firmas_electronicas_component__["a" /* AuditoriaFirmasElectronicasComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_administrador_lista_usuarios_lista_usuarios_component__["a" /* ListaUsuariosComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_recuperacion_password_recuperacion_password_component__["a" /* RecuperacionPasswordComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_recuperacion_password_request_recuperacion_password_request_component__["a" /* RecuperacionPasswordRequestComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_22__node_modules_angular2_qrcode__["a" /* QRCodeModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_11__services_index__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_11__services_index__["c" /* UserRequestsService */],
            __WEBPACK_IMPORTED_MODULE_11__services_index__["d" /* HttpService */]
            //{
            //    provide: HttpService,
            //    useFactory: (backend: XHRBackend, options: RequestOptions, router: Router, authenticationService: AuthenticationService) => {
            //        return new HttpService(backend, options, router, authenticationService);
            //    },
            //    deps: [XHRBackend, RequestOptions, Router, AuthenticationService]
            //}
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/clave-detalles/clave-detalles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clave-detalles/clave-detalles.component.html":
/***/ (function(module, exports) {

module.exports = "<!--@{\r\n    string panelAutoridadRegistro;\r\n    if (Model.EstadoVerificacion == \"Aprobado\") { panelAutoridadRegistro = \"panel-success\"; }\r\n    else if (Model.EstadoVerificacion == \"Rechazado\") { panelAutoridadRegistro = \"panel-danger\"; }\r\n    else { panelAutoridadRegistro = \"panel-default\"; }\r\n}\r\n\r\n@{\r\n    string panelAutoridadCeritificacion;\r\n    if (Model.FechaCertificacion == DateTime.MinValue) { panelAutoridadCeritificacion = \"panel-default\"; }\r\n    else { panelAutoridadCeritificacion = \"panel-success\"; }\r\n\r\n}-->\r\n<h2>Detalles de Clave</h2>\r\n\r\n<div>\r\n    <h4>{{this.keyDetails.nombreIdentificativo}}</h4>\r\n    <hr />\r\n    <dl class=\"dl-horizontal\">\r\n\r\n        <dt>\r\n            Nombre Identificativo\r\n        </dt>\r\n        <dd>\r\n            {{this.keyDetails.nombreIdentificativo}}\r\n        </dd>\r\n\r\n        <dt>\r\n            Clave Pública\r\n        </dt>\r\n        <dd>\r\n            {{this.keyDetails.formattedPublicKey}}\r\n        </dd>\r\n    </dl>\r\n\r\n    <a (click)=\"descargarCertificado()\" class=\"btn btn-default\" role=\"button\" *ngIf=\"this.keyDetails.fechaCertificacion != null\">Descargar Certificado</a>\r\n    <hr />\r\n    <div class=\"panel\" [ngClass]=\"{'panel-success' : this.keyDetails.estadoVerificacion == 'Aprobado', 'panel-danger' : this.keyDetails.estadoVerificacion == 'Rechazado',  'panel-default' : this.keyDetails.estadoVerificacion == null}\">\r\n        <div class=\"panel-heading\">Autoridad de Registro</div>\r\n        <div class=\"panel-body\" *ngIf=\"this.keyDetails.fechaVerificacion != null\">\r\n            <dt>\r\n                Usuario verificador\r\n            </dt>\r\n            <dd>\r\n                {{this.keyDetails.usuarioVerificador}}\r\n            </dd>\r\n\r\n            <dt>\r\n                Estado de verificación\r\n            </dt>\r\n            <dd>\r\n                {{this.keyDetails.estadoVerificacion}}\r\n            </dd>\r\n\r\n            <dt>\r\n                Fecha de verificación\r\n            </dt>\r\n            <dd>\r\n                {{this.keyDetails.fechaVerificacion}}\r\n            </dd>\r\n        </div>\r\n        <div class=\"panel-body\" *ngIf=\"this.keyDetails.fechaVerificacion == null\">\r\n            <p>La Autoridad de Registro todavía no validó la solicitud de certificado</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"panel\" [ngClass]=\"this.keyDetails.fechaCertificacion? 'panel-success' : 'panel-default'\">\r\n        <div class=\"panel-heading\">Autoridad de Certificación</div>\r\n        <div class=\"panel-body\" *ngIf=\"this.keyDetails.fechaCertificacion != null\">\r\n\r\n            \r\n            <dt>\r\n                Usuario certificador\r\n            </dt>\r\n            <dd>\r\n                {{this.keyDetails.usuarioCertificador}}\r\n            </dd>\r\n\r\n            <dt>\r\n                Fecha de certificación\r\n            </dt>\r\n            <dd>\r\n                {{this.keyDetails.fechaCertificacion}}\r\n            </dd>\r\n\r\n            <dt>\r\n                Fecha de validez\r\n            </dt>\r\n            <dd>\r\n                {{this.keyDetails.fechaValidez}}\r\n            </dd>            \r\n        </div>\r\n        <div class=\"panel-body\" *ngIf=\"this.keyDetails.fechaCertificacion == null\">\r\n            <p>La Autoridad de Certificación todavía no firmó la solicitud de certificado</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div>\r\n    <a routerLink=\"/Claves\">Volver a la lista</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/clave-detalles/clave-detalles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClaveDetallesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClaveDetallesComponent = (function () {
    function ClaveDetallesComponent(userRequestsService, route) {
        this.userRequestsService = userRequestsService;
        this.route = route;
        this.keyDetails = {};
    }
    ClaveDetallesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.userRequestsService.getKeyDetails(_this.id).subscribe(function (data) {
                console.log(data);
                _this.keyDetails = data;
            });
            ;
            // In a real app: dispatch action to load the details here.
        });
    };
    ClaveDetallesComponent.prototype.descargarCertificado = function () {
        var _this = this;
        this.userRequestsService.getDescargarCertificado(this.id)
            .subscribe(function (data) { return _this.downloadFile(data); }),
            function (//console.log(data),
                error) { return console.log("Error downloading the file."); },
            function () { return console.info("OK"); };
    };
    ClaveDetallesComponent.prototype.downloadFile = function (data) {
        var headers = data.headers;
        console.log("headers"); //<--- Check log for content disposition
        console.log(headers); //<--- Check log for content disposition
        var fileName = this.getFileNameFromHttpResponse(data);
        var contentDisposition = headers.get('content-disposition');
        console.log(contentDisposition);
        console.log(data);
        var blob = new Blob([data.blob()], { type: 'application/x-msdownload' });
        var url = window.URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };
    ClaveDetallesComponent.prototype.getFileNameFromHttpResponse = function (httpResponse) {
        var contentDispositionHeader = httpResponse.headers.get('content-disposition');
        console.log(contentDispositionHeader);
        var result = contentDispositionHeader.split(';')[1].trim().split('=')[1];
        return result.replace(/"/g, '');
    };
    return ClaveDetallesComponent;
}());
ClaveDetallesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-clave-detalles',
        template: __webpack_require__("../../../../../src/app/clave-detalles/clave-detalles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/clave-detalles/clave-detalles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* ActivatedRoute */]) === "function" && _b || Object])
], ClaveDetallesComponent);

var _a, _b;
//# sourceMappingURL=clave-detalles.component.js.map

/***/ }),

/***/ "../../../../../src/app/claves/claves.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/claves/claves.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Mis claves</h2>\r\n\r\n<p>\r\n  <a [routerLink]=\"['/Claves/NuevoPar']\">Crear nuevo par de claves</a>\r\n</p>\r\n<p>\r\n  Solo podrán ser utilizados los pares de claves que hayan sido certificados por la Autoridad Certificante. Contacte a su Autoridad de Registro.\r\n</p>\r\n\r\n<h3>Claves certificadas</h3>\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th style=\"width: 170px;\">\r\n        Nombre Identificativo\r\n      </th>\r\n\r\n      <th>\r\n        Clave Pública\r\n      </th>\r\n\r\n      <th style=\"width: 210px;\">\r\n        Vencimiento del certificado\r\n      </th>\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let clave of data.clavesCertificadas\">\r\n      <td>\r\n        {{clave.nombreIdentificativo}}\r\n      </td>\r\n      <td>\r\n        <span style=\"font-family:monospace;\">{{clave.formattedPublicKey}}</span>\r\n      </td>\r\n      <td>\r\n        {{clave.fechaValidez}}\r\n      </td>\r\n      <td>\r\n          <a routerLink=\"/Claves/{{clave.id}}\">Detalles</a>\r\n      </td>\r\n    </tr>    \r\n  </tbody>\r\n</table>\r\n\r\n<h3>Claves pendientes de certificación</h3>\r\n<table class=\"table\">\r\n  <thead>\r\n    <tr>\r\n      <th style=\"width: 170px;\">\r\n        Nombre Identificativo\r\n      </th>\r\n\r\n      <th>\r\n        Clave Pública\r\n      </th>\r\n\r\n      <th></th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let clave of data.clavesPendientes\">\r\n      <td>\r\n        {{clave.nombreIdentificativo}}\r\n      </td>\r\n      <td>\r\n        <span style=\"font-family:monospace;\">{{clave.formattedPublicKey}}</span>\r\n      </td>\r\n\r\n      <td>\r\n          <a routerLink=\"/Claves/{{clave.id}}\">Detalles</a>\r\n      </td>\r\n    </tr>\r\n    \r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/claves/claves.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClavesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClavesComponent = (function () {
    function ClavesComponent(http, userRequestsService, router) {
        this.http = http;
        this.userRequestsService = userRequestsService;
        this.data = {};
        console.log("Claves built");
        this.getClaves();
    }
    ClavesComponent.prototype.ngOnInit = function () {
    };
    ClavesComponent.prototype.getData = function () {
        return this.userRequestsService.getMyKeys();
        //return this.http.get('http://localhost:5000/api/Claves')
        //    .map((res: Response) => res.json());
    };
    ClavesComponent.prototype.getClaves = function () {
        var _this = this;
        this.getData().subscribe(function (data) {
            console.log(data);
            _this.data = data;
        });
    };
    return ClavesComponent;
}());
ClavesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-claves',
        template: __webpack_require__("../../../../../src/app/claves/claves.component.html"),
        styles: [__webpack_require__("../../../../../src/app/claves/claves.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_index__["c" /* UserRequestsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ClavesComponent);

var _a, _b, _c;
//# sourceMappingURL=claves.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Ingresar</h2>\r\n<div class=\"row\">\r\n    <div class=\"col-md-8\">\r\n        <section>\r\n            <form *ngIf=\"!twoStepRequired\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" class=\"form-horizontal\" novalidate>\r\n                <hr />\r\n                <div asp-validation-summary=\"All\" class=\"text-danger\"></div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\" class=\"col-md-4 control-label\">Nombre de usuario</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" class=\"form-control\" required />\r\n                        <span asp-validation-for=\"Email\" class=\"text-danger\"></span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\" class=\"col-md-4 control-label\">Password</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input name=\"password\" type=\"password\" class=\"form-control\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n                        <span asp-validation-for=\"Password\" class=\"text-danger\"></span>\r\n                    </div>\r\n                </div>\r\n                <!--<div class=\"form-group\">\r\n                    <div class=\"col-md-offset-2 col-md-10\">\r\n                        <div class=\"checkbox\">\r\n                            <label asp-for=\"RememberMe\">\r\n                                <input asp-for=\"RememberMe\" />\r\n                                Recordarme?@*@Html.DisplayNameFor(m => m.RememberMe)*@\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>-->\r\n                <div *ngIf=\"f.submitted && (username.errors?.required || password.errors?.required)\">\r\n                    <p class=\"text-danger field-validation-valid\">Ingrese su nombre de usuario y contraseña.</p>\r\n                </div>\r\n                <div *ngIf=\"errorMessage\">\r\n                    <p class=\"text-danger field-validation-valid\">{{this.errorMessage}}</p>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-2 col-md-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\">Ingresar</button>\r\n                    </div>\r\n                </div>\r\n                <!--<p>\r\n                    <a>Registrar un nuevo usuario?</a>\r\n                </p>-->\r\n                <p>\r\n                    <a routerLink=\"/RecuperacionPassword\">Olvidó su contraseña?</a>\r\n                </p>\r\n            </form>\r\n\r\n\r\n            <form *ngIf=\"twoStepRequired\" name=\"form\" (ngSubmit)=\"twoStepForm.form.valid && sendTwoStepCode()\" #twoStepForm=\"ngForm\" class=\"form-horizontal\" novalidate>\r\n                <hr />\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\" class=\"col-md-4 control-label\">Código temporal</label>\r\n                    <div class=\"col-md-8\">\r\n                        <input name=\"twoStepCode\" [(ngModel)]=\"model.twoStepCode\" #twoStepCode=\"ngModel\" class=\"form-control\" required type=\"number\"  />\r\n                        <span asp-validation-for=\"Email\" class=\"text-danger\"></span>\r\n                    </div>\r\n                </div>\r\n                <!--<div class=\"form-group\">\r\n                    <div class=\"col-md-offset-2 col-md-10\">\r\n                        <div class=\"checkbox\">\r\n                            <label asp-for=\"RememberMe\">\r\n                                <input asp-for=\"RememberMe\" />\r\n                                Recordarme?@*@Html.DisplayNameFor(m => m.RememberMe)*@\r\n                            </label>\r\n                        </div>\r\n                    </div>\r\n                </div>-->\r\n                <div *ngIf=\"twoStepForm.submitted && twoStepCode.errors?.required\">\r\n                    <p class=\"text-danger field-validation-valid\">Ingrese un código temporal.</p>\r\n                </div>\r\n                <div *ngIf=\"this.twoStepErrorMessage\">\r\n                    <p class=\"text-danger field-validation-valid\">{{this.twoStepErrorMessage}}</p>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-offset-2 col-md-10\">\r\n                        <button type=\"submit\" class=\"btn btn-default\">Ingresar</button>\r\n                    </div>\r\n                </div>\r\n                <!--<p>\r\n                    <a>Registrar un nuevo usuario?</a>\r\n                </p>-->\r\n                <p>\r\n                    <a routerLink=\"/RecuperacionPassword\">Olvidó su contraseña?</a>\r\n                </p>\r\n            </form>\r\n\r\n        </section>\r\n    </div>\r\n    <!--<div class=\"col-md-4\">\r\n        <section>\r\n            <h4>Use another service to log in.</h4>\r\n            <hr />\r\n            @{\r\n            var loginProviders = SignInManager.GetExternalAuthenticationSchemes().ToList();\r\n            if (loginProviders.Count == 0)\r\n            {\r\n            <div>\r\n                <p>\r\n                    There are no external authentication services configured. See <a href=\"https://go.microsoft.com/fwlink/?LinkID=532715\">this article</a>\r\n                    for details on setting up this ASP.NET application to support logging in via external services.\r\n                </p>\r\n            </div>\r\n            }\r\n            else\r\n            {\r\n            <form asp-controller=\"Account\" asp-action=\"ExternalLogin\" asp-route-returnurl=\"@ViewData[\" ReturnUrl\"]\" method=\"post\" class=\"form-horizontal\">\r\n                <div>\r\n                    <p>\r\n                        @foreach (var provider in loginProviders)\r\n                        {\r\n                        <button type=\"submit\" class=\"btn btn-default\" name=\"provider\" value=\"@provider.AuthenticationScheme\" title=\"Log in using your @provider.DisplayName account\">@provider.AuthenticationScheme</button>\r\n                        }\r\n                    </p>\r\n                </div>\r\n            </form>\r\n            }\r\n            }\r\n        </section>\r\n    </div>-->\r\n</div>\r\n\r\n<!--<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n        </div>\r\n    </form>\r\n</div>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.LogOut();
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.LogIn(this.model.username, this.model.password)
            .subscribe(function (data) {
            if (!data.success && data.message) {
                _this.errorMessage = data.message;
                return;
            }
            if (data.twostep_required) {
                _this.twoStepRequired = true;
            }
            else {
                switch (_this.authenticationService.Role) {
                    case 'Usuario':
                        _this.router.navigate(["/Claves"]);
                        break;
                    case 'AutoridadCertificante':
                        _this.router.navigate(["/SolicitudesCertificacion"]);
                        break;
                    case 'AutoridadDeRegistro':
                        _this.router.navigate(["/AprobacionClavesNoCertificadas"]);
                        break;
                    case 'Administrador':
                        _this.router.navigate(["/Usuarios"]);
                        break;
                }
            }
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginFormComponent.prototype.sendTwoStepCode = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.SendTwoStepCode(this.model.twoStepCode)
            .subscribe(function (data) {
            if (data.success) {
                console.log("this.authenticationService.Role: " + _this.authenticationService.Role);
                switch (_this.authenticationService.Role) {
                    case 'Usuario':
                        _this.router.navigate(["/Claves"]);
                        break;
                    case 'AutoridadCertificante':
                        _this.router.navigate(["/SolicitudesCertificacion"]);
                        break;
                    case 'AutoridadDeRegistro':
                        _this.router.navigate(["/AprobacionClavesNoCertificadas"]);
                        break;
                }
            }
            else {
                console.log(data.message);
                _this.twoStepErrorMessage = data.message;
            }
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginFormComponent;
}());
LoginFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-login-form',
        template: __webpack_require__("../../../../../src/app/login-form/login-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-form/login-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_alert_service__["a" /* AlertService */]) === "function" && _d || Object])
], LoginFormComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-default navbar-fixed-side navbar-inverse\">-->\r\n<div class=\"container\">\r\n    <div class=\"navbar-header\">\r\n        <button class=\"navbar-toggle\" data-target=\".navbar-collapse\" data-toggle=\"collapse\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"./\">ProyectoGrado_SFE</a>\r\n    </div>\r\n    <div class=\"collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav\" *ngIf=\"!authenticationService.IsLoggedIn\">\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a routerLink=\"/FirmaElectronica/Verificar\">Verificar Firma Electrónica</a>\r\n            </li>\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a routerLink=\"/login\">Ingresar</a>\r\n            </li>\r\n        </ul>\r\n        <ul class=\"nav navbar-nav\" *ngIf=\"authenticationService.Role == 'Usuario'\">\r\n\r\n\r\n            <li class=\"dropdown\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Mis claves <b class=\"caret\"></b></a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                        <a routerLink=\"/Claves\">Lista de claves</a>\r\n                    </li>\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                        <a routerLink=\"/Claves/NuevoPar\">Crear nuevo par de claves</a>\r\n                    </li>\r\n                </ul>\r\n\r\n            </li>\r\n            <li class=\"dropdown\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Firma Electrónica <b class=\"caret\"></b></a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                        <a routerLink=\"/FirmaElectronica/Generar\">Generar Firma Electrónica</a>\r\n                    </li>\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                        <a routerLink=\"/FirmaElectronica/Verificar\">Verificar Firma Electrónica</a>\r\n                    </li>\r\n                    <!--<li role=\"separator\" class=\"divider\"></li>-->\r\n                    <!--<li><a asp-area=\"\" asp-controller=\"FirmaElectronica\" asp-action=\"RegistroFirmasElectronicas\">Mis Firmas Electrónicas</a></li>-->\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class=\"nav navbar-nav\" *ngIf=\"authenticationService.Role == 'AutoridadDeRegistro'\">\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a routerLink=\"/AprobacionClavesNoCertificadas\">Claves</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class=\"nav navbar-nav\" *ngIf=\"authenticationService.Role == 'AutoridadCertificante'\">\r\n            <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                <a routerLink=\"/SolicitudesCertificacion\">Solicitudes de certificación</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class=\"nav navbar-nav\" *ngIf=\"authenticationService.Role == 'Administrador'\">\r\n            <li class=\"dropdown\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Administración de Usuarios<b class=\"caret\"></b></a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                        <a routerLink=\"/Usuarios\">Lista de usuarios</a>\r\n                    </li>\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                        <a routerLink=\"/Usuarios/Crear\">Crear nuevo usuario</a>\r\n                    </li>\r\n                </ul>\r\n\r\n            </li>\r\n\r\n            <li class=\"dropdown\">\r\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Auditoría<b class=\"caret\"></b></a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                        <a routerLink=\"/AuditoriaFirmasElectronicas\">Auditoría de firmas electrónicas</a>\r\n                    </li>                    \r\n                </ul>\r\n\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"authenticationService.IsLoggedIn\">\r\n            <li>\r\n                <a routerLink=\"/PanelControl\">{{authenticationService.UserName}}</a>\r\n            </li>\r\n            <li>\r\n                <a style=\"cursor: pointer;\" (click)=\"logOut()\">Cerrar sesión</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<!--</nav>-->"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'nav',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")],
        host: { 'class': 'navbar navbar-default navbar-fixed-side navbar-inverse' }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/nuevaClave.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevaClave; });
var NuevaClave = (function () {
    function NuevaClave() {
    }
    return NuevaClave;
}());

//# sourceMappingURL=nuevaClave.js.map

/***/ }),

/***/ "../../../../../src/app/nuevo-par-claves/nuevo-par-claves.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nuevo-par-claves/nuevo-par-claves.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<h2> Crear nuevo par de claves</h2>\r\n\r\n<form (ngSubmit)=\"onSubmit(nuevaClaveForm)\" #nuevaClaveForm=\"ngForm\">\r\n    <div class=\"form-horizontal\">\r\n        <hr>\r\n\r\n        <h4>Ingrese los datos para la Solicitud de Firmado de Certificado:</h4>                \r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"NombreIdentificativo\">Nombre Identificativo</label>\r\n            <div class=\"col-md-10\">\r\n                <input class=\"form-control\" type=\"text\" required name=\"nombreIdentificativo\" [(ngModel)]=\"model.nombreIdentificativo\" #nombreIdentificativo=\"ngModel\">                \r\n                <small id=\"fileHelp\" class=\"form-text text-muted\">Nombre con el que identificará al par de claves.</small>                                \r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-default\">\r\n            <div class=\"panel-heading\">Datos para la Solicitud de Firmado de Certificado (PKCS#10)</div>\r\n            <div class=\"panel-body\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\" for=\"CommonName\">Nombre Común</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"commonName\" [(ngModel)]=\"model.commonName\" #commonName=\"ngModel\" required>\r\n                        <small id=\"fileHelp\" class=\"form-text text-muted\">Nombre de la persona o entidad dueña del par de claves.</small>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\" for=\"Organization\">Organización</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"organization\" [(ngModel)]=\"model.organization\" #organization=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\" for=\"OrganizationUnit\">Unidad Organizacional</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"organizationUnit\" [(ngModel)]=\"model.organizationUnit\" #organizationUnit=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\" for=\"City\">Ciudad</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"city\" [(ngModel)]=\"model.city\" #city=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\" for=\"State\">Estado</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"state\" [(ngModel)]=\"model.state\" #state=\"ngModel\" required>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\" for=\"CountryIso2Characters\">País (2 caracteres)</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input class=\"form-control\" type=\"text\" name=\"countryIso2Characters\" [(ngModel)]=\"model.countryIso2Characters\" maxlength=\"2\" #countryIso2Characters=\"ngModel\" required>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-md-2 control-label\" for=\"Email\">Email</label>\r\n                    <div class=\"col-md-10\">\r\n                        <input class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required>\r\n                        <span class=\"text-danger field-validation-valid\" data-valmsg-for=\"Email\" data-valmsg-replace=\"true\"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-2 control-label\" for=\"NombreIdentificativo\">Contraseña</label>\r\n            <div class=\"col-md-10\">\r\n                <input class=\"form-control\" type=\"password\" required name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n                <small id=\"fileHelp\" class=\"form-text text-muted\">Debe reingresar su contraseña, para encriptar su nueva clave privada.</small>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"nuevaClaveForm.submitted && !nuevaClaveForm.valid\">\r\n            <p class=\"text-danger field-validation-valid\">Debe completar todos los campos.</p>\r\n        </div>\r\n        <div *ngIf=\"errorMessage\">\r\n            <p class=\"text-danger field-validation-valid\">{{this.errorMessage}}</p>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <div class=\"col-md-offset-2 col-md-10\">\r\n                <input type=\"submit\" value=\"Crear par de claves y enviar Solicitud\" class=\"btn btn-default\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div>\r\n    <a [routerLink]=\"['/Claves']\">Volver a la lista</a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/nuevo-par-claves/nuevo-par-claves.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nuevaClave__ = __webpack_require__("../../../../../src/app/nuevaClave.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_user_requests_service__ = __webpack_require__("../../../../../src/app/_services/user-requests.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoParClavesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NuevoParClavesComponent = (function () {
    function NuevoParClavesComponent(router, http, _fb, userRequestsService) {
        this.router = router;
        this.http = http;
        this._fb = _fb;
        this.userRequestsService = userRequestsService;
        this.events = []; // use later to display form changes
    }
    NuevoParClavesComponent.prototype.ngOnInit = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_7__nuevaClave__["a" /* NuevaClave */]();
        this.buildForm();
    };
    NuevoParClavesComponent.prototype.buildForm = function () {
        this.heroForm = this._fb.group({
            'NombreIdentificativo': [this.model.NombreIdentificativo, [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(4),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(24)
                ]
            ],
        });
        //this.heroForm.valueChanges
        //    .subscribe(data => this.onValueChanged(data));
        //this.onValueChanged(); // (re)set validation messages now
    };
    NuevoParClavesComponent.prototype.onSubmit = function (model) {
        var _this = this;
        console.log(model.value);
        if (!model.valid)
            return;
        this.submitted = true;
        console.log("Submit");
        this.userRequestsService.postNewKey(model.value)
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            if (response.success)
                _this.router.navigate(["/Claves"]);
            if (!response.success)
                _this.errorMessage = response.message;
        }, function (error) {
        });
        //.then(this.extractData)
        //.catch(this.handleError);;                    
    };
    NuevoParClavesComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    Object.defineProperty(NuevoParClavesComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    NuevoParClavesComponent.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return NuevoParClavesComponent;
}());
NuevoParClavesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Component */])({
        selector: 'app-nuevo-par-claves',
        template: __webpack_require__("../../../../../src/app/nuevo-par-claves/nuevo-par-claves.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nuevo-par-claves/nuevo-par-claves.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__services_user_requests_service__["a" /* UserRequestsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__services_user_requests_service__["a" /* UserRequestsService */]) === "function" && _d || Object])
], NuevoParClavesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=nuevo-par-claves.component.js.map

/***/ }),

/***/ "../../../../../src/app/nuevo-usuario-view-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NuevoUsuarioViewModel; });
var NuevoUsuarioViewModel = (function () {
    function NuevoUsuarioViewModel() {
    }
    return NuevoUsuarioViewModel;
}());

//# sourceMappingURL=nuevo-usuario-view-model.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map