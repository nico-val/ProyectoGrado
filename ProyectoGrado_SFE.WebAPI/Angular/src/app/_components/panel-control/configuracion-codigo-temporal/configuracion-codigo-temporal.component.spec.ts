import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionCodigoTemporalComponent } from './configuracion-codigo-temporal.component';

describe('ConfiguracionCodigoTemporalComponent', () => {
  let component: ConfiguracionCodigoTemporalComponent;
  let fixture: ComponentFixture<ConfiguracionCodigoTemporalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracionCodigoTemporalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionCodigoTemporalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
