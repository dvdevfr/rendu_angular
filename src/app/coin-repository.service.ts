import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coin } from './coin';

@Injectable({
  providedIn: 'root',
})
export class CoinRepositoryService {
  APIUrl = 'https://api.coincap.io/v2/assets';
  constructor(private _Http: HttpClient) {}
  getAll() {
    return this._Http.get<{ data: Coin[] }>(this.APIUrl);
  }
}
