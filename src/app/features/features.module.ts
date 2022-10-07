import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './components/exchange/exchange.component';



@NgModule({
  declarations: [
    ExchangeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ExchangeComponent
  ]
})
export class FeaturesModule { }
