import { Injectable } from '@angular/core';
import { CurrenciesService } from 'src/core/currencies.service';
import { CurrenciesConversionRates } from 'src/models/currencies-converion-rates';

@Injectable({
  providedIn: 'root',
})
export class ConverterService {
  private currencyRates: CurrenciesConversionRates;

  convert(value: number, from: string, to: string): number {
    console.log(`converting ${value} from ${from} to ${to}`);
    if (value) {
      return +(this.currencyRates[from][to] * value).toFixed(2);
    }
    return 0;
  }

  constructor(currenciesService: CurrenciesService) {
    currenciesService.currencies$.subscribe(
      (currencyRates) => (this.currencyRates = currencyRates)
    );
  }
}
