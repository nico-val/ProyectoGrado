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
var user_requests_service_1 = require("../../_services/user-requests.service");
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
    core_1.Component({
        selector: 'app-recuperacion-password',
        templateUrl: './recuperacion-password.component.html',
        styleUrls: ['./recuperacion-password.component.css']
    }),
    __metadata("design:paramtypes", [user_requests_service_1.UserRequestsService, router_1.ActivatedRoute])
], RecuperacionPasswordComponent);
exports.RecuperacionPasswordComponent = RecuperacionPasswordComponent;
//# sourceMappingURL=recuperacion-password.component.js.map