import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditionListComponent } from './audition-list.component';

describe('AuditionListComponent', () => {
  let component: AuditionListComponent;
  let fixture: ComponentFixture<AuditionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuditionListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuditionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
