import { TestBed } from '@angular/core/testing';

import { BrowserstorageService } from './browserstorage.service';

describe('BrowserstorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BrowserstorageService = TestBed.get(BrowserstorageService);
    expect(service).toBeTruthy();
  });
});
