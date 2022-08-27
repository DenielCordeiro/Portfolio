import { TestBed } from '@angular/core/testing';

import { ApiJsonService } from './api-json.service';

describe('ApiJsonService', () => {
  let service: ApiJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
