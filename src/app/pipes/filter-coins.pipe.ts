import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from '../coin';

@Pipe({
  name: 'filterCoins',
})
export class FilterCoinsPipe implements PipeTransform {
  transform(value: Coin[], str = ''): Coin[] {
    return value.filter(
      (v) =>
        v.id.toUpperCase().includes(str.toUpperCase()) ||
        v.symbol.toUpperCase().includes(str.toUpperCase())
    );
  }
}
