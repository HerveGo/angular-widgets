import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { CryptoCoin } from '../components/models/crypto-coin';
import { CryptoMarketModel } from '../components/models/crypto-market';

const apiBaseUrl = "https://api.coingecko.com/api/v3/coins/";
@Injectable({
  providedIn: 'root'
})

export class CryptoMarketsService {

  constructor(private http: HttpClient) { }

  getMarkets(perPage: number = 5, currency: "usd"|"eur", page: number = 1): Observable<CryptoMarketModel[]> {
    return this.http.get<CryptoMarketModel[]>(`${apiBaseUrl}markets`, {
      params: {
        "per_page": perPage,
        "vs_currency": currency,
        "page": page
      }
    });
  }

  getCoins(): Observable<CryptoCoin[]> {
    return this.http.get<CryptoCoin[]>(`${apiBaseUrl}list`);
  }

}
