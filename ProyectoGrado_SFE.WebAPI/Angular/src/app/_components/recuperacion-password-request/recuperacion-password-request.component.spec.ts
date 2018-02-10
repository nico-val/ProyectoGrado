import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacionPasswordRequestComponent } from './recuperacion-password-request.component';

describe('RecuperacionPasswordRequestComponent', () => {
  let component: RecuperacionPasswordRequestComponent;
  let fixture: ComponentFixture<RecuperacionPasswordRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperacionPasswordRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperacionPasswordRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
