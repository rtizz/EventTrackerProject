import { TestBed } from '@angular/core/testing';

import { DiyService } from './diy.service';

describe('DiyService', () => {
  let service: DiyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
