import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleSolicitudAprobacionComponent } from './detalle-solicitud-aprobacion.component';

describe('DetalleSolicitudAprobacionComponent', () => {
  let component: DetalleSolicitudAprobacionComponent;
  let fixture: ComponentFixture<DetalleSolicitudAprobacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleSolicitudAprobacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleSolicitudAprobacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
