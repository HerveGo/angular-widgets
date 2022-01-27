import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoMarketModel } from '../components/models/crypto-market';

const apiBaseUrl = "https://api.coingecko.com/api/v3/coins/markets";
@Injectable({
  providedIn: 'root'
})

export class CryptoMarketsService {

  constructor(private http: HttpClient) { }

  getMarkets(perPage: number = 5, currency: "usd"|"eur"): Observable<CryptoMarketModel[]> {
    return this.http.get<CryptoMarketModel[]>(apiBaseUrl, {
      params: {
        "per_page": perPage,
        "vs_currency": currency,
        "page": 1
      }
    });
  }

}
