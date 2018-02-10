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
var user_requests_service_1 = require("../../_services/user-requests.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
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
    core_1.Component({
        selector: 'app-detalle-solicitud-aprobacion',
        templateUrl: './detalle-solicitud-aprobacion.component.html',
        styleUrls: ['./detalle-solicitud-aprobacion.component.css']
    }),
    __metadata("design:paramtypes", [router_2.Router, user_requests_service_1.UserRequestsService, router_1.ActivatedRoute])
], DetalleSolicitudAprobacionComponent);
exports.DetalleSolicitudAprobacionComponent = DetalleSolicitudAprobacionComponent;
//# sourceMappingURL=detalle-solicitud-aprobacion.component.js.map