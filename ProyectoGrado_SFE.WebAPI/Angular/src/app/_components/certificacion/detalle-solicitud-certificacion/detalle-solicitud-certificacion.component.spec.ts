import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSolicitudCertificacionComponent } from './detalle-solicitud-certificacion.component';

describe('DetalleSolicitudCertificacionComponent', () => {
  let component: DetalleSolicitudCertificacionComponent;
  let fixture: ComponentFixture<DetalleSolicitudCertificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleSolicitudCertificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
