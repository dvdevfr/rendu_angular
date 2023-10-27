import { Component, OnInit } from '@angular/core';
import { CoinRepositoryService } from '../coin-repository.service';
import { Coin } from '../coin';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css'],
})
export class CoinsComponent implements OnInit {
  filter: string = '';
  coins: Coin[] = [];
  selectedCoin: Coin | null = null;
  constructor(private _coinRepository: CoinRepositoryService) {}
  ngOnInit(): void {
    this._coinRepository.getAll().subscribe({
      next: (resp) => (this.coins = resp.data),
      error: (err) =>
        console.log('Error while getting coins from coin repository'),
    });
  }
}
