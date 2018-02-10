"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var aprobacion_solicitudes_component_1 = require("./aprobacion-solicitudes.component");
describe('AprobacionSolicitudesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [aprobacion_solicitudes_component_1.AprobacionSolicitudesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(aprobacion_solicitudes_component_1.AprobacionSolicitudesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=aprobacion-solicitudes.component.spec.js.map