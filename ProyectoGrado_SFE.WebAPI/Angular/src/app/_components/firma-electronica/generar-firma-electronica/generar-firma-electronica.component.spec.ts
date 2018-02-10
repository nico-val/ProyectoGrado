import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarFirmaElectronicaComponent } from './generar-firma-electronica.component';

describe('GenerarFirmaElectronicaComponent', () => {
  let component: GenerarFirmaElectronicaComponent;
  let fixture: ComponentFixture<GenerarFirmaElectronicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerarFirmaElectronicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarFirmaElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
