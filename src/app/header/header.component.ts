import { Component, Input } from '@angular/core';
import { CurrenciesConversionRates } from 'src/models/currencies-converion-rates';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() currencies: CurrenciesConversionRates;

  constructor() {}
}
