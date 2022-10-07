export interface ICurrencyReduced {
  usdUan: Currency,
  eurUan: Currency,
  usdEur: Currency
}

export interface Currency {
  rateBuy: number,
  rateSell: number
}

export const initaialState: ICurrencyReduced = {
  usdUan: {
    rateBuy: 0,
    rateSell: 0
  },
  eurUan: {
    rateBuy: 0,
    rateSell: 0
  },
  usdEur: {
    rateBuy: 0,
    rateSell: 0
  }
}
