"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var detalle_solicitud_certificacion_component_1 = require("./detalle-solicitud-certificacion.component");
describe('DetalleSolicitudCertificacionComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [detalle_solicitud_certificacion_component_1.DetalleSolicitudCertificacionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(detalle_solicitud_certificacion_component_1.DetalleSolicitudCertificacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detalle-solicitud-certificacion.component.spec.js.map