import { Component, OnInit } from '@angular/core';
import { delay, mergeWith, Observable, switchMap } from 'rxjs';
import { CurrenciesService } from 'src/core/currencies.service';
import { CurrenciesConversionRates } from 'src/models/currencies-converion-rates';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  currencyRates$: Observable<CurrenciesConversionRates>;

  ngOnInit(): void {
    this.currencyRates$ = this.currenciesService.getCurrency('UAH')!.pipe(
      mergeWith(this.currenciesService.getCurrency('USD')!),
      switchMap((_) => this.currenciesService.currencies$),
      delay(1000)
    );
  }

  constructor(public currenciesService: CurrenciesService) {}
}
