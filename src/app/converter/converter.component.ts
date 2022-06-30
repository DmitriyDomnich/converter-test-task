import { Component, Input, ViewChild } from '@angular/core';
import { CurrenciesConversionRates } from 'src/models/currencies-converion-rates';
import { ConvertFormComponent } from './convert-form/convert-form.component';
import { ConverterService } from './converter.service';

@Component({
  selector: 'converter',
  templateUrl: './converter.component.html',
})
export class ConverterComponent {
  @ViewChild('form1') form1Ref: ConvertFormComponent;
  @ViewChild('form2') form2Ref: ConvertFormComponent;

  @Input() currencyRates: CurrenciesConversionRates;

  from = 'UAH';
  to = 'USD';

  firstCurrencyChange(currencyName: string) {
    if (this.to === currencyName) {
      this.to = this.from;
      this.form1Ref.inputValue = this.form1Ref.inputValue;
    }

    this.from = currencyName;

    if (this.form1Ref.inputValue) {
      this.form2Ref.inputValue = this.converterService.convert(
        this.form1Ref.inputValue!,
        this.from,
        this.to
      );
    } else {
      this.form1Ref.inputValue = null;
    }
  }
  secondCurrencyChange(currencyName: string) {
    if (this.from === currencyName) {
      this.from = this.to;
      this.form1Ref.inputValue = this.form1Ref.inputValue;
    }

    this.to = currencyName;

    if (this.form2Ref.inputValue) {
      this.form2Ref.inputValue = this.converterService.convert(
        this.form1Ref.inputValue!,
        this.from,
        this.to
      );
    } else {
      this.form2Ref.inputValue = null;
    }
  }

  constructor(public converterService: ConverterService) {}
}
