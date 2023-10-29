import { Component, Input, SimpleChanges } from '@angular/core';

import { Parameter } from '../core/Parameter';
import { ListItem } from '../interfaces/list-item.interface';

@Component({
  selector: 'app-shopping-total',
  templateUrl: './shopping-total.component.html',
  styleUrls: ['./shopping-total.component.css'],
})
export class ShoppingTotalComponent {
  @Input('list') items!: ListItem[];
  subtotal = 0;
  taxes = 0;
  total = 0;

  ngOnChanges(changes: SimpleChanges) {
    this.subtotal = this.getSubTotal(this.items);
    this.taxes = this.getTaxes(this.subtotal, Parameter.PercentTax());
    this.total = this.subtotal + this.taxes;
  }

  getSubTotal(list: ListItem[]): number {
    return parseFloat(
      list.reduce((accum, value) => accum + value.price, 0).toFixed(2)
    );
  }

  getTaxes(subtotal: number, percentTax: number): number {
    return parseFloat((subtotal * percentTax).toFixed(2));
  }
}
