"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var http_1 = require("@angular/http");
var CustomRequestOptions = (function (_super) {
    __extends(CustomRequestOptions, _super);
    function CustomRequestOptions(customOptions) {
        var _this = _super.call(this) || this;
        var user = JSON.parse(localStorage.getItem('user'));
        _this.token = user && user.token;
        _this.headers.append('Content-Type', 'application/json');
        _this.headers.append('Authorization', 'Bearer ' + _this.token);
        return _this;
    }
    return CustomRequestOptions;
}(http_1.BaseRequestOptions));
exports.CustomRequestOptions = CustomRequestOptions;
//# sourceMappingURL=custom-request-options.js.map