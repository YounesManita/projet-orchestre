import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAbsenceConfirmListComponent } from './leave-absence-confirm-list.component';

describe('LeaveAbsenceConfirmListComponent', () => {
  let component: LeaveAbsenceConfirmListComponent;
  let fixture: ComponentFixture<LeaveAbsenceConfirmListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveAbsenceConfirmListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveAbsenceConfirmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
