import { TestBed } from '@angular/core/testing';

import { JsonQueryService } from './json-query.service';

describe('JsonQueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonQueryService = TestBed.get(JsonQueryService);
    expect(service).toBeTruthy();
  });
});
