import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditoriaFirmasElectronicasComponent } from './auditoria-firmas-electronicas.component';

describe('AuditoriaFirmasElectronicasComponent', () => {
  let component: AuditoriaFirmasElectronicasComponent;
  let fixture: ComponentFixture<AuditoriaFirmasElectronicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditoriaFirmasElectronicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditoriaFirmasElectronicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
