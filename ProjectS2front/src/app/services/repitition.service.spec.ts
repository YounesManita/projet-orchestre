import { TestBed } from '@angular/core/testing';

import { RepititionService } from './repitition.service';

describe('RepititionService', () => {
  let service: RepititionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepititionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
