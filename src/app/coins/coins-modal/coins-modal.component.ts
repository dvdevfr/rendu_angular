import { Component, Input } from '@angular/core';
import { Coin } from 'src/app/coin';

@Component({
  selector: 'app-coins-modal',
  templateUrl: './coins-modal.component.html',
  styleUrls: ['./coins-modal.component.css'],
})
export class CoinsModalComponent {
  @Input({ required: true }) coin: Coin | null = null;
}
