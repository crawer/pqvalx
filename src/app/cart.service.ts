import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  items: Product[] = [];

  addCard(product: Product) {
    this.items.push(product);
  }

  getItem() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
