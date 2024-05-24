import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAbsenceListComponent } from './leave-absence-list.component';

describe('LeaveAbsenceListComponent', () => {
  let component: LeaveAbsenceListComponent;
  let fixture: ComponentFixture<LeaveAbsenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeaveAbsenceListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeaveAbsenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
