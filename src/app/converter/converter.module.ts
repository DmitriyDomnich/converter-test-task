import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConverterComponent } from './converter.component';
import { FormsModule } from '@angular/forms';
import { ConvertFormComponent } from './convert-form/convert-form.component';
import { CurrencyNamesPipe } from './currency-names.pipe';

@NgModule({
  declarations: [ConverterComponent, ConvertFormComponent, CurrencyNamesPipe],
  imports: [CommonModule, FormsModule],
  exports: [ConverterComponent],
})
export class ConverterModule {}
