import { TestBed } from '@angular/core/testing';

import { SpotListenService } from './spot-listen.service';

describe('SpotListenService', () => {
  let service: SpotListenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpotListenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
