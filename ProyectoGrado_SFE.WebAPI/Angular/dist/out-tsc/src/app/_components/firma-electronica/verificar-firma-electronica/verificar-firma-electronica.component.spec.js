"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var verificar_firma_electronica_component_1 = require("./verificar-firma-electronica.component");
describe('VerificarFirmaElectronicaComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [verificar_firma_electronica_component_1.VerificarFirmaElectronicaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(verificar_firma_electronica_component_1.VerificarFirmaElectronicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=verificar-firma-electronica.component.spec.js.map