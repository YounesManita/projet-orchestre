import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutauditionComponent } from './ajoutaudition.component';

describe('AjoutauditionComponent', () => {
  let component: AjoutauditionComponent;
  let fixture: ComponentFixture<AjoutauditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjoutauditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjoutauditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
