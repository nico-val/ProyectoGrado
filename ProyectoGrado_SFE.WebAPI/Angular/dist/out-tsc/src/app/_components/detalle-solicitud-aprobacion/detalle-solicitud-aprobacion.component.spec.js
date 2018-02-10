"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var detalle_solicitud_aprobacion_component_1 = require("./detalle-solicitud-aprobacion.component");
describe('DetalleSolicitudAprobacionComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [detalle_solicitud_aprobacion_component_1.DetalleSolicitudAprobacionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(detalle_solicitud_aprobacion_component_1.DetalleSolicitudAprobacionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=detalle-solicitud-aprobacion.component.spec.js.map