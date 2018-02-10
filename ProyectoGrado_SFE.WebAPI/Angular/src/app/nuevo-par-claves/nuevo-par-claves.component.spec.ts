import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoParClavesComponent } from './nuevo-par-claves.component';

describe('NuevoParClavesComponent', () => {
  let component: NuevoParClavesComponent;
  let fixture: ComponentFixture<NuevoParClavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoParClavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoParClavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
