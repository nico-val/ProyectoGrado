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
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        // set token if saved in local storage        
        try {
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        }
        catch (e) {
            console.log(e);
        }
        console.log(currentUser);
        if (currentUser != null) {
            this.AuthToken = currentUser.auth_token;
            this.UserName = currentUser.username;
            this.Role = currentUser.role;
            this.IsLoggedIn = true;
        }
        else
            this.IsLoggedIn = false;
    }
    AuthenticationService.prototype.LogIn = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:5000/api/auth/login', JSON.stringify({ userName: username, password: password }), options)
            .map(function (response) {
            var res = response.json();
            if (res.success && res.auth_token) {
                _this.AuthToken = res.auth_token;
                if (!res.twostep_required) {
                    console.log("storing");
                    console.log(res);
                    localStorage.setItem('currentUser', JSON.stringify(res));
                    _this.UserName = res.username;
                    _this.Role = res.role;
                    _this.IsLoggedIn = true;
                }
                return { twostep_required: res.twostep_required };
            }
            else
                return res;
        });
        //.map((response: Response) => {              
        //    // login successful if there's a jwt token in the response              
        //    let user = response.json();              
        //    if (user && user.auth_token) {
        //        // store user details and jwt token in local storage to keep user logged in between page refreshes                  
        //        this.AuthToken = user.auth_token;                  
        //    }
        //    if (!user.twostep_required) {
        //        localStorage.setItem('currentUser', JSON.stringify(user));
        //        this.UserName = user.username;
        //        this.Role = user.role;
        //        this.IsLoggedIn = true;
        //    }
        //    return { twostep_required: user.twostep_required };
        //});
    };
    AuthenticationService.prototype.SendTwoStepCode = function (code) {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append('Authorization', "Bearer " + this.AuthToken);
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('http://localhost:5000/api/auth/login/2fa', JSON.stringify({ code: code }), options)
            .map(function (response) {
            // login successful if there's a jwt token in the response              
            var res = response.json();
            if (res.success) {
                if (res && res.auth_token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(res));
                    console.log("res");
                    console.log(res);
                    _this.AuthToken = res.auth_token;
                    _this.UserName = res.username;
                    _this.Role = res.role;
                    _this.IsLoggedIn = true;
                }
            }
            return res;
        });
    };
    AuthenticationService.prototype.LogOut = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.AuthToken = null;
        this.Role = null;
        this.UserName = null;
        this.IsLoggedIn = false;
        this.router.navigate(['Login']);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map