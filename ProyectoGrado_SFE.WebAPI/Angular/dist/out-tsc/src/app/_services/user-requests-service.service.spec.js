"use strict";
var testing_1 = require("@angular/core/testing");
var user_requests_service_service_1 = require("./user-requests-service.service");
describe('UserRequestsServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [user_requests_service_service_1.UserRequestsServiceService]
        });
    });
    it('should be created', testing_1.inject([user_requests_service_service_1.UserRequestsServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=user-requests-service.service.spec.js.map