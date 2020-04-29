import { TestBed } from '@angular/core/testing';

import { StaticpageService } from './staticpage.service';

describe('StaticpageService', () => {
  let service: StaticpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaticpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
