import {Component, OnInit} from '@angular/core';
import {CurrencyService} from "./services/currency.service";
import {map} from "rxjs";
import {ICurrency} from "./models/icurrency";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
