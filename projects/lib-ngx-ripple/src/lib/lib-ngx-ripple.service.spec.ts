import { TestBed } from '@angular/core/testing';

import { LibNgxRippleService } from './lib-ngx-ripple.service';

describe('LibNgxRippleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibNgxRippleService = TestBed.get(LibNgxRippleService);
    expect(service).toBeTruthy();
  });
});
