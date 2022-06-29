import { Pipe, PipeTransform } from '@angular/core';
import { CurrenciesConversionRates } from 'src/models/currencies-converion-rates';

@Pipe({
  name: 'currencyNames',
})
export class CurrencyNamesPipe implements PipeTransform {
  transform(value: CurrenciesConversionRates | null): string[] | null {
    if (!value) {
      return null;
    }
    return Object.keys(value);
  }
}
