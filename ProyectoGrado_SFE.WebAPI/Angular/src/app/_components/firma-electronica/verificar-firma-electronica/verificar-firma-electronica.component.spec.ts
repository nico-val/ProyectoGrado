import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarFirmaElectronicaComponent } from './verificar-firma-electronica.component';

describe('VerificarFirmaElectronicaComponent', () => {
  let component: VerificarFirmaElectronicaComponent;
  let fixture: ComponentFixture<VerificarFirmaElectronicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerificarFirmaElectronicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarFirmaElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
