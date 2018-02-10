"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var recuperacion_password_request_component_1 = require("./recuperacion-password-request.component");
describe('RecuperacionPasswordRequestComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [recuperacion_password_request_component_1.RecuperacionPasswordRequestComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(recuperacion_password_request_component_1.RecuperacionPasswordRequestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=recuperacion-password-request.component.spec.js.map