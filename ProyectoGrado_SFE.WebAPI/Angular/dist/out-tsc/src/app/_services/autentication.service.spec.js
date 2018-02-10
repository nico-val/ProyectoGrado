"use strict";
var testing_1 = require("@angular/core/testing");
var autentication_service_1 = require("./autentication.service");
describe('AutenticationService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [autentication_service_1.AutenticationService]
        });
    });
    it('should be created', testing_1.inject([autentication_service_1.AutenticationService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=autentication.service.spec.js.map