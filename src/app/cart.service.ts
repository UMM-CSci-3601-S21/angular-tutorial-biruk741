import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  getShippingPricesPlaceholder() {
    return [
      {
        "type": "Overnight",
        "price": 25.99
      },
      {
        "type": "2-Day",
        "price": 9.99
      },
      {
        "type": "Postal",
        "price": 2.99
      }
    ];
  }
}
