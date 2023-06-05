import { TestBed } from '@angular/core/testing';

import { FellikeService } from './fellike.service';

describe('FellikeService', () => {
  let service: FellikeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FellikeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
