import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsiteCandidatconcertComponent } from './lsite-candidatconcert.component';

describe('LsiteCandidatconcertComponent', () => {
  let component: LsiteCandidatconcertComponent;
  let fixture: ComponentFixture<LsiteCandidatconcertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LsiteCandidatconcertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LsiteCandidatconcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
