import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbarUserComponent } from './appbar-user.component';

describe('AppbarUserComponent', () => {
  let component: AppbarUserComponent;
  let fixture: ComponentFixture<AppbarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppbarUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppbarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
