import {Component, Input, OnInit} from '@angular/core';
import {ICurrency} from "../../../models/icurrency";
import {filter, map, Observable, of} from "rxjs";
import {CurrencyService} from "../../../services/currency.service";
import {ICurrencyReduced, initaialState} from "../../../models/icurrency-reduced";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currency: ICurrencyReduced;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getData().pipe(
      map(data => {
        const filterData = data.filter(item => item.currencyCodeA === 840 || item.currencyCodeA === 978);
        return filterData.reduce((acc, curr) => {
            if(curr.currencyCodeA === 840 && curr.currencyCodeB === 980) {
              acc.usdUan.rateBuy = curr.rateBuy;
              acc.usdUan.rateSell = curr.rateSell;
            } else if(curr.currencyCodeA === 978 && curr.currencyCodeB === 980) {
              acc.eurUan.rateBuy = curr.rateBuy;
              acc.eurUan.rateSell = curr.rateSell;
            } else {
              acc.usdEur.rateBuy = curr.rateBuy;
              acc.usdEur.rateSell = curr.rateSell;
            }
            return acc;
          },
          initaialState)
      })
    ).subscribe(value => this.currency = value)
  }

}
