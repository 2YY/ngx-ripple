import {TestBed} from '@angular/core/testing';

import {NgxRippleService} from './ngx-ripple.service';

describe('NgxRippleService', () => {
  let service: NgxRippleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRippleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
