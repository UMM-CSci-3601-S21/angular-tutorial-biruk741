import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) { }

  addToCart(product) : void {
    this.items.push(product);
  }

  getItems() : any[] {
    return this.items;
  }

  clearCart() : any[] {
    this.items = [];
    return this.items;
  }
  getShippingPrices() : Observable<any> {
    return this.http.get('./assets/shipping.json');
  }
}
