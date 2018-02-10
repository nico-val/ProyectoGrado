"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var authentication_service_1 = require("./authentication.service");
var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, router, authService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.router = router;
        _this.authService = authService;
        _this.apiUrl = 'http://localhost:5000/api/';
        return _this;
    }
    HttpService.prototype.request = function (url, options) {
        var token = this.authService.AuthToken;
        if (typeof url === 'string') {
            if (!options) {
                // let's make option object
                options = { headers: new http_1.Headers() };
            }
            options.headers.set('Authorization', "Bearer " + token);
        }
        else {
            // we have to add the token to the url object
            url.headers.set('Authorization', "Bearer " + token);
        }
        return _super.prototype.request.call(this, url, options).catch(this.catchErrors());
    };
    HttpService.prototype.catchErrors = function () {
        var _this = this;
        return function (res) {
            if (res.status === 401 || res.status === 403) {
                //handle authorization errors
                //in this example I am navigating to logout route which brings the login screen
                _this.authService.LogOut();
            }
            return Observable_1.Observable.throw(res);
        };
    };
    return HttpService;
}(http_1.Http));
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend, http_1.RequestOptions, router_1.Router, authentication_service_1.AuthenticationService])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map