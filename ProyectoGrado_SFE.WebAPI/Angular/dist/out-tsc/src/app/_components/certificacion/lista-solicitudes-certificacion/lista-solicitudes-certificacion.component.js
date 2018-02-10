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
var index_1 = require("../../../_services/index");
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
    core_1.Component({
        selector: 'app-lista-solicitudes-certificacion',
        templateUrl: './lista-solicitudes-certificacion.component.html',
        styleUrls: ['./lista-solicitudes-certificacion.component.css']
    }),
    __metadata("design:paramtypes", [index_1.UserRequestsService])
], ListaSolicitudesCertificacionComponent);
exports.ListaSolicitudesCertificacionComponent = ListaSolicitudesCertificacionComponent;
//# sourceMappingURL=lista-solicitudes-certificacion.component.js.map