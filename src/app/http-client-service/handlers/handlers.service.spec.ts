import { TestBed } from '@angular/core/testing';

import { HandlersService } from './handlers.service';

describe('HandlersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandlersService = TestBed.get(HandlersService);
    expect(service).toBeTruthy();
  });
});
