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
var alert_service_1 = require("../_services/alert.service");
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
    core_1.Component({
        moduleId: module.id,
        selector: 'app-login-form',
        templateUrl: './login-form.component.html',
        styleUrls: ['./login-form.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        authentication_service_1.AuthenticationService,
        alert_service_1.AlertService])
], LoginFormComponent);
exports.LoginFormComponent = LoginFormComponent;
//# sourceMappingURL=login-form.component.js.map