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
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
var nuevaClave_1 = require("../nuevaClave");
var user_requests_service_1 = require("../_services/user-requests.service");
var NuevoParClavesComponent = (function () {
    function NuevoParClavesComponent(router, http, _fb, userRequestsService) {
        this.router = router;
        this.http = http;
        this._fb = _fb;
        this.userRequestsService = userRequestsService;
        this.events = []; // use later to display form changes
    }
    NuevoParClavesComponent.prototype.ngOnInit = function () {
        this.model = new nuevaClave_1.NuevaClave();
        this.buildForm();
    };
    NuevoParClavesComponent.prototype.buildForm = function () {
        this.heroForm = this._fb.group({
            'NombreIdentificativo': [this.model.NombreIdentificativo, [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(24)
                ]
            ],
        });
        //this.heroForm.valueChanges
        //    .subscribe(data => this.onValueChanged(data));
        //this.onValueChanged(); // (re)set validation messages now
    };
    NuevoParClavesComponent.prototype.onSubmit = function (model) {
        var _this = this;
        console.log(model.value);
        if (!model.valid)
            return;
        this.submitted = true;
        console.log("Submit");
        this.userRequestsService.postNewKey(model.value)
            .map(function (response) { return response.json(); })
            .subscribe(function (response) {
            if (response.success)
                _this.router.navigate(["/Claves"]);
            if (!response.success)
                _this.errorMessage = response.message;
        }, function (error) {
        });
        //.then(this.extractData)
        //.catch(this.handleError);;                    
    };
    NuevoParClavesComponent.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    Object.defineProperty(NuevoParClavesComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    NuevoParClavesComponent.prototype.handleError = function (error) {
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
    return NuevoParClavesComponent;
}());
NuevoParClavesComponent = __decorate([
    core_1.Component({
        selector: 'app-nuevo-par-claves',
        templateUrl: './nuevo-par-claves.component.html',
        styleUrls: ['./nuevo-par-claves.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, forms_1.FormBuilder, user_requests_service_1.UserRequestsService])
], NuevoParClavesComponent);
exports.NuevoParClavesComponent = NuevoParClavesComponent;
//# sourceMappingURL=nuevo-par-claves.component.js.map