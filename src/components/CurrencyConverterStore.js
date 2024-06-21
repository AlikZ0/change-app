// CurrencyConverterStore.js
import { makeAutoObservable } from 'mobx';

class CurrencyConverterStore {
  usd = 1;
  eur = 1.07;

  constructor() {
    makeAutoObservable(this);
  }

  setUsd(usd) {
    this.usd = usd;
    this.eur = (usd * 1.07).toFixed(2);
  }

  setEur(eur) {
    this.eur = eur;
    this.usd = (eur / 1.07).toFixed(2);
  }
}

export const currencyConverterStore = new CurrencyConverterStore();
