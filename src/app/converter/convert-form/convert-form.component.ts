import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { tap } from 'rxjs';
import { CurrenciesService } from 'src/core/currencies.service';

@Component({
  selector: 'convert-form',
  templateUrl: './convert-form.component.html',
  styles: [
    `
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      input[type='number'] {
        -moz-appearance: textfield;
      }
    `,
  ],
})
export class ConvertFormComponent implements OnInit {
  @Output() onCurrencyChanged = new EventEmitter<string>();
  @Output() onValueChanged = new EventEmitter<number>();

  @Input() selectValue: string;
  @Input() currencyRates: string[];

  inputValue: number | null = null;

  @HostBinding('class') get class() {
    return 'flex justify-center my-2';
  }

  changeCurrency() {
    this.currenciesService
      .getCurrency(this.selectValue)
      .pipe(tap((_) => this.onCurrencyChanged.emit(this.selectValue)))
      .subscribe();
  }

  ngOnInit(): void {}

  constructor(private currenciesService: CurrenciesService) {}
}
