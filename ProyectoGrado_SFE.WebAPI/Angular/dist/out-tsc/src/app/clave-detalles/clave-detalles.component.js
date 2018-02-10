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
var user_requests_service_1 = require("../_services/user-requests.service");
var router_1 = require("@angular/router");
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
    core_1.Component({
        selector: 'app-clave-detalles',
        templateUrl: './clave-detalles.component.html',
        styleUrls: ['./clave-detalles.component.css']
    }),
    __metadata("design:paramtypes", [user_requests_service_1.UserRequestsService, router_1.ActivatedRoute])
], ClaveDetallesComponent);
exports.ClaveDetallesComponent = ClaveDetallesComponent;
//# sourceMappingURL=clave-detalles.component.js.map