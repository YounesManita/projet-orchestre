import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountAcceptationComponent } from './account-acceptation.component';

describe('AccountAcceptationComponent', () => {
  let component: AccountAcceptationComponent;
  let fixture: ComponentFixture<AccountAcceptationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountAcceptationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountAcceptationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
