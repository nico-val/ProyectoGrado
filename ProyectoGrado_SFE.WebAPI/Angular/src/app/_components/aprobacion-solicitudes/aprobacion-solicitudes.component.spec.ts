import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AprobacionSolicitudesComponent } from './aprobacion-solicitudes.component';

describe('AprobacionSolicitudesComponent', () => {
  let component: AprobacionSolicitudesComponent;
  let fixture: ComponentFixture<AprobacionSolicitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AprobacionSolicitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AprobacionSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
