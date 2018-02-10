import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitudesCertificacionComponent } from './lista-solicitudes-certificacion.component';

describe('ListaSolicitudesCertificacionComponent', () => {
  let component: ListaSolicitudesCertificacionComponent;
  let fixture: ComponentFixture<ListaSolicitudesCertificacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSolicitudesCertificacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitudesCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
