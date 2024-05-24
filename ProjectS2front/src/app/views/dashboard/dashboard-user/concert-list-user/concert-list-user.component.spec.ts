import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertListUserComponent } from './concert-list-user.component';

describe('ConcertListUserComponent', () => {
  let component: ConcertListUserComponent;
  let fixture: ComponentFixture<ConcertListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConcertListUserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcertListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
