import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitionListComponent } from './repetition-list.component';

describe('RepetitionListComponent', () => {
  let component: RepetitionListComponent;
  let fixture: ComponentFixture<RepetitionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepetitionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepetitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
