"use strict";
var testing_1 = require("@angular/core/testing");
var custom_request_options_service_1 = require("./custom-request-options.service");
describe('CustomRequestOptionsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [custom_request_options_service_1.CustomRequestOptionsService]
        });
    });
    it('should be created', testing_1.inject([custom_request_options_service_1.CustomRequestOptionsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=custom-request-options.service.spec.js.map