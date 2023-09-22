import { Product } from './products';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

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
