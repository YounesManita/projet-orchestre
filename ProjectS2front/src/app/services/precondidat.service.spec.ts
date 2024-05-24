import { TestBed } from '@angular/core/testing';

import { PrecondidatService } from './precondidat.service';

describe('PrecondidatService', () => {
  let service: PrecondidatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecondidatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
