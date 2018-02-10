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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var generar_firma_electronica_model_1 = require("../../../_classes/generar-firma-electronica-model");
var GenerarFirmaElectronicaComponent = (function () {
    function GenerarFirmaElectronicaComponent(userRequestsService, _fb) {
        this.userRequestsService = userRequestsService;
        this._fb = _fb;
        this.myForm = new forms_1.FormGroup({
            ClaveId: new forms_1.FormControl(),
            Archivo: new forms_1.FormControl(),
            Password: new forms_1.FormControl(),
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
        var reqModel = new generar_firma_electronica_model_1.GenerarFirmaElectronicaModel(model.ClaveId, this.file, model.Password);
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
        if (error instanceof http_1.Response) {
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
    core_1.Component({
        selector: 'app-generar-firma-electronica',
        templateUrl: './generar-firma-electronica.component.html',
        styleUrls: ['./generar-firma-electronica.component.css']
    }),
    __metadata("design:paramtypes", [user_requests_service_1.UserRequestsService, forms_1.FormBuilder])
], GenerarFirmaElectronicaComponent);
exports.GenerarFirmaElectronicaComponent = GenerarFirmaElectronicaComponent;
//# sourceMappingURL=generar-firma-electronica.component.js.map