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
var forms_1 = require("@angular/forms");
var user_requests_service_1 = require("../../_services/user-requests.service");
var http_service_1 = require("../../_services/http.service");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var CambioPasswordComponent = (function () {
    function CambioPasswordComponent(router, http, _fb, userRequestsService) {
        this.router = router;
        this.http = http;
        this._fb = _fb;
        this.userRequestsService = userRequestsService;
        this.myForm = new forms_1.FormGroup({
            oldPassword: new forms_1.FormControl(),
            newPassword: new forms_1.FormControl(),
            confirmPassword: new forms_1.FormControl(),
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
    return CambioPasswordComponent;
}());
CambioPasswordComponent = __decorate([
    core_1.Component({
        selector: 'app-cambio-password',
        templateUrl: './cambio-password.component.html',
        styleUrls: ['./cambio-password.component.css'],
        providers: [user_requests_service_1.UserRequestsService, http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, forms_1.FormBuilder, user_requests_service_1.UserRequestsService])
], CambioPasswordComponent);
exports.CambioPasswordComponent = CambioPasswordComponent;
//# sourceMappingURL=cambio-password.component.js.map