import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts :any[] = this.cartService.getShippingPricesPlaceholder();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getShippingPrices().subscribe(data => {
      // this.shippingCosts = data;
      console.log(data);

    })
  }
}
