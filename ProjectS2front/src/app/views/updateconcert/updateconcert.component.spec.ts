import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateconcertComponent } from './updateconcert.component';

describe('UpdateconcertComponent', () => {
  let component: UpdateconcertComponent;
  let fixture: ComponentFixture<UpdateconcertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateconcertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateconcertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
