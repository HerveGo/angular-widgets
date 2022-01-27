import { TestBed } from '@angular/core/testing';

import { CryptoMarketsService } from './crypto-markets.service';

describe('CryptoMarketsService', () => {
  let service: CryptoMarketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CryptoMarketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
