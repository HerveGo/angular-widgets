import { Component, Input, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { CryptoMarketsService } from 'src/app/services/crypto-markets.service';
import { CryptoCoin } from '../models/crypto-coin';
import { CryptoMarketModel } from '../models/crypto-market';

@Component({
  selector: 'aw-crypto-markets',
  templateUrl: './crypto-markets.component.html',
  styleUrls: ['./crypto-markets.component.scss']
})
export class CryptoMarketsComponent implements OnInit {
  @Input() quantity: number = 5;
  @Input() currency: "usd" | "eur" = "usd";
  @Input() page: number = 1;

  markets: CryptoMarketModel[] = [];
  coins: CryptoCoin[] = [];

  pageMax: number = 0;
  showPageInput: boolean = false;

  constructor(private cryptoMarketsService: CryptoMarketsService) { }

  ngOnInit(): void {
    this.fetchCoins();
    this.fetchMarkets();
    // interval(20000).subscribe(
    //   () => this.fetchMarkets()
    // );
  }

  private fetchCoins(): void {
    this.cryptoMarketsService.getCoins().subscribe(
      (coins: CryptoCoin[]) => {
        this.coins = coins;
        this.pageMax = Math.round( (this.coins.length+1) / this.quantity );
      }
    );
  }

  private fetchMarkets(): void {
    this.cryptoMarketsService.getMarkets(this.quantity, this.currency, this.page ).subscribe(
      (markets: CryptoMarketModel[]) => this.markets = markets
    );
  }

  previousPage(): void {
    if( this.page >= 1 ) this.page--;
    this.fetchMarkets();
  }

  nextPage(): void {
    if( this.page < this.pageMax ) this.page++;
    this.fetchMarkets();
  }

  firstPage(): void {
    this.page = 1;
    this.fetchMarkets();
  }

  lastPage(): void {
    this.page = this.pageMax;
    this.fetchMarkets();
  }

  setPage(page: number): void {
    if( page >= this.pageMax ) page = this.pageMax;
    if( page < 1 ) page = 1;
    this.page = page;
    this.toggleInput();
    this.fetchMarkets();
  }

  toggleInput(): void {
    this.showPageInput = !this.showPageInput;
  }

}
