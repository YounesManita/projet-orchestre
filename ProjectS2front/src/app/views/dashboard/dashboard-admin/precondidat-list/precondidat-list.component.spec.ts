import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecondidatListComponent } from './precondidat-list.component';

describe('PrecondidatListComponent', () => {
  let component: PrecondidatListComponent;
  let fixture: ComponentFixture<PrecondidatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrecondidatListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrecondidatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
