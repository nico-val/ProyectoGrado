"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var generar_firma_electronica_component_1 = require("./generar-firma-electronica.component");
describe('GenerarFirmaElectronicaComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [generar_firma_electronica_component_1.GenerarFirmaElectronicaComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(generar_firma_electronica_component_1.GenerarFirmaElectronicaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=generar-firma-electronica.component.spec.js.map