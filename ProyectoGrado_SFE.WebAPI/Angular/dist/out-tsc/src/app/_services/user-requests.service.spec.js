"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var user_requests_service_1 = require("./user-requests.service");
describe('UserRequestsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [user_requests_service_1.UserRequestsService]
        });
    });
    it('should be created', testing_1.inject([user_requests_service_1.UserRequestsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=user-requests.service.spec.js.map