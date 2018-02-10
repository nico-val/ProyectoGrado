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
var user_requests_service_1 = require("../../../_services/user-requests.service");
var authentication_service_1 = require("../../../_services/authentication.service");
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
    core_1.Component({
        selector: 'app-configuracion-codigo-temporal',
        templateUrl: './configuracion-codigo-temporal.component.html',
        styleUrls: ['./configuracion-codigo-temporal.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, user_requests_service_1.UserRequestsService, authentication_service_1.AuthenticationService])
], ConfiguracionCodigoTemporalComponent);
exports.ConfiguracionCodigoTemporalComponent = ConfiguracionCodigoTemporalComponent;
//# sourceMappingURL=configuracion-codigo-temporal.component.js.map