import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerPaymentComponent } from './trainer-payment.component';

describe('TrainerPaymentComponent', () => {
  let component: TrainerPaymentComponent;
  let fixture: ComponentFixture<TrainerPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
