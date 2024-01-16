import { Component, computed, Signal, signal } from '@angular/core';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent {
  products = signal<string[]>(['Product 1', 'Product 2', 'Product 3']);
  total: Signal<number> = signal(0);
  empty: Signal<string> = signal('');

  constructor(private readonly cart: CartService) {}

  ngOnInit(): void {
    //this.products = toSignal(this.cart.getProductsCart());

    this.total = computed(() => this.products().length);
    this.empty = computed(() => {
      if (this.products().length === 0) {
        return 'No products in the cart: ' + this.total();
      }

      return '';
    });
  }

  add() {
    //this.cart.addProduct('Product ' + (this.products.length + 1));
    //this.products.push('Product ' + (this.products.length + 1));
    this.products.update((prd) => {
      return [...prd, 'Product ' + (this.products().length + 1)];
    });
  }

  deleteAll() {
    this.products.set([]);
  }
}
