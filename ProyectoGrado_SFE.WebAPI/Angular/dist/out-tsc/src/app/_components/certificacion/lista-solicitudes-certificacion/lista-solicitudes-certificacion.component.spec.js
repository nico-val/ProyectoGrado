"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var lista_solicitudes_certificacion_component_1 = require("./lista-solicitudes-certificacion.component");
describe('ListaSolicitudesCertificacionComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [lista_solicitudes_certificacion_component_1.ListaSolicitudesCertificacionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(lista_solicitudes_certificacion_component_1.ListaSolicitudesCertificacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=lista-solicitudes-certificacion.component.spec.js.map