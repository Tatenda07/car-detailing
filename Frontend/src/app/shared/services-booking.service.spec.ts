import { TestBed } from '@angular/core/testing';

import { ServicesBookingService } from './services-booking.service';

describe('ServicesBookingService', () => {
  let service: ServicesBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
