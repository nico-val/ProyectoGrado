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
var nuevo_usuario_view_model_1 = require("../../../nuevo-usuario-view-model");
var user_requests_service_1 = require("../../../_services/user-requests.service");
//import { Http, Response } from '@angular/http';
var router_1 = require("@angular/router");
var CrearUsuarioComponent = (function () {
    function CrearUsuarioComponent(userRequestsService, router) {
        this.userRequestsService = userRequestsService;
        this.router = router;
        this.model = new nuevo_usuario_view_model_1.NuevoUsuarioViewModel();
    }
    CrearUsuarioComponent.prototype.ngOnInit = function () {
    };
    CrearUsuarioComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!form.valid)
            return;
        this.model.UserName = this.model.Email;
        this.submitted = true;
        console.log("Submit");
        console.log(form);
        this.userRequestsService.postNewUser(this.model)
            .map(function (response) { return response.json(); })
            .subscribe(function (data) {
            //console.log(data);
            if (data.success)
                _this.router.navigate(['PanelControl']);
            else {
                _this.errorMessage = data.message;
                console.log(_this.errorMessage);
            }
        });
        //.catch(this.handleError);;
    };
    return CrearUsuarioComponent;
}());
CrearUsuarioComponent = __decorate([
    core_1.Component({
        selector: 'app-crear-usuario',
        templateUrl: './crear-usuario.component.html',
        styleUrls: ['./crear-usuario.component.css']
    }),
    __metadata("design:paramtypes", [user_requests_service_1.UserRequestsService, router_1.Router])
], CrearUsuarioComponent);
exports.CrearUsuarioComponent = CrearUsuarioComponent;
//# sourceMappingURL=crear-usuario.component.js.map