import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrencyApiResponse } from 'src/models/api-responses/currency-api-response';
import { CurrenciesConversionRates } from 'src/models/currencies-converion-rates';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private currenciesSubject = new BehaviorSubject<CurrenciesConversionRates>(
    {}
  );
  currencies$ = this.currenciesSubject.asObservable();

  getCurrency(currency: string) {
    const usedCurrencies = this.currenciesSubject.getValue();

    const { baseConverterApiUrl, apiKey } = environment;

    return of(usedCurrencies).pipe(
      switchMap((usedCurrencies) => {
        if (currency in usedCurrencies) {
          return of(null);
        }
        return this.http
          .get<CurrencyApiResponse>(
            `${baseConverterApiUrl}${apiKey}/latest/${currency}`
          )
          .pipe(
            tap(({ conversion_rates: rates, base_code: currency }) => {
              usedCurrencies[currency] = rates;
              this.currenciesSubject.next(usedCurrencies);
            })
          );
      })
    );
  }
  constructor(private http: HttpClient) {}
}
