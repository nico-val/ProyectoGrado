"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var configuracion_codigo_temporal_component_1 = require("./configuracion-codigo-temporal.component");
describe('ConfiguracionCodigoTemporalComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [configuracion_codigo_temporal_component_1.ConfiguracionCodigoTemporalComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(configuracion_codigo_temporal_component_1.ConfiguracionCodigoTemporalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should be created', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=configuracion-codigo-temporal.component.spec.js.map