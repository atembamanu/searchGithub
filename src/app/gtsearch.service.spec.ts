import { TestBed } from '@angular/core/testing';

import { GtsearchService } from './gtsearch.service';

describe('GtsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GtsearchService = TestBed.get(GtsearchService);
    expect(service).toBeTruthy();
  });
});
