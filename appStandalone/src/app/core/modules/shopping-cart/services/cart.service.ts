import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class CartService {
  private productsCart = ['Product 1', 'Product 2', 'Product 3'];

  constructor() {}

  getProductsCart() {
    return of(this.productsCart);
  }

  addProduct(product: string) {
    this.productsCart.push(product);
  }

  removeProduct(product: string) {
    this.productsCart = this.productsCart.filter((p) => p !== product);
  }
}
