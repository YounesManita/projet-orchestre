import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRepetitionComponent } from './add-repetition.component';

describe('AddRepetitionComponent', () => {
  let component: AddRepetitionComponent;
  let fixture: ComponentFixture<AddRepetitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddRepetitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRepetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
