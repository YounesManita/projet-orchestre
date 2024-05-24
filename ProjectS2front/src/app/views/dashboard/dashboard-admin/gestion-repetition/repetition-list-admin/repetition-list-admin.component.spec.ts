import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepetitionListAdminComponent } from './repetition-list-admin.component';

describe('RepetitionListAdminComponent', () => {
  let component: RepetitionListAdminComponent;
  let fixture: ComponentFixture<RepetitionListAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepetitionListAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepetitionListAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
