import { TestBed } from '@angular/core/testing';

import { StorageContextService } from './storage-context.service';

describe('StorageContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageContextService = TestBed.get(StorageContextService);
    expect(service).toBeTruthy();
  });
});
