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
var verificar_firma_electronica_model_1 = require("../../../_classes/verificar-firma-electronica-model");
var user_requests_service_1 = require("../../../_services/user-requests.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
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
        var reqModel = new verificar_firma_electronica_model_1.VerificarFirmaElectronicaModel(this.file, this.digitalSignatureFile);
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
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    return VerificarFirmaElectronicaComponent;
}());
VerificarFirmaElectronicaComponent = __decorate([
    core_1.Component({
        selector: 'app-verificar-firma-electronica',
        templateUrl: './verificar-firma-electronica.component.html',
        styleUrls: ['./verificar-firma-electronica.component.css']
    }),
    __metadata("design:paramtypes", [user_requests_service_1.UserRequestsService, ng_bootstrap_1.NgbModal])
], VerificarFirmaElectronicaComponent);
exports.VerificarFirmaElectronicaComponent = VerificarFirmaElectronicaComponent;
//# sourceMappingURL=verificar-firma-electronica.component.js.map