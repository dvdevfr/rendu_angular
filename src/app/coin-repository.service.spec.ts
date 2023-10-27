import { TestBed } from '@angular/core/testing';

import { CoinRepositoryService } from './coin-repository.service';

describe('CoinRepositoryService', () => {
  let service: CoinRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoinRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
