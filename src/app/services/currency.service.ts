import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {ICurrency} from "../models/icurrency";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) { }

  getData(): Observable<ICurrency[]> {
    return this.http.get<ICurrency[]>('https://api.monobank.ua/bank/currency');
  }
}
