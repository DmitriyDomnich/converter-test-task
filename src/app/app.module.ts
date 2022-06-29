import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderModule } from 'src/app/header/header.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConverterModule } from './converter/converter.module';
import { LoaderModule } from './widgets/loader/loader.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    ConverterModule,
    HeaderModule,
    LoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
