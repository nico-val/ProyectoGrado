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
var user_requests_service_1 = require("../../../_services/user-requests.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
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
    core_1.Component({
        selector: 'app-detalle-solicitud-certificacion',
        templateUrl: './detalle-solicitud-certificacion.component.html',
        styleUrls: ['./detalle-solicitud-certificacion.component.css']
    }),
    __metadata("design:paramtypes", [router_2.Router, user_requests_service_1.UserRequestsService, router_1.ActivatedRoute])
], DetalleSolicitudCertificacionComponent);
exports.DetalleSolicitudCertificacionComponent = DetalleSolicitudCertificacionComponent;
//# sourceMappingURL=detalle-solicitud-certificacion.component.js.map