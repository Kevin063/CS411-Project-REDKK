import { TestBed } from '@angular/core/testing';

import { PinPusherService } from './pin-pusher.service';

describe('PinPusherService', () => {
  let service: PinPusherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinPusherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
