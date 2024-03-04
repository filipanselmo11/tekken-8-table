import { TestBed } from '@angular/core/testing';

import { TekkenService } from './tekken.service';

describe('TekkenService', () => {
  let service: TekkenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TekkenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
