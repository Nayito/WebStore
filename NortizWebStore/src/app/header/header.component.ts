import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  cartCount = 0;
  cartItems: Product[] = [];
  showList = false;
  cartTotal = 0;

  constructor(private cService: CartService) { }

  ngOnInit() {
    this.cService.$cartItems.subscribe(items => {
      this.cartItems = items;
    });
    this.cService.$cartTotal.subscribe(total => {
      this.cartTotal = total;
    });
    this.cService.$cartQuantity.subscribe(count => {
      this.cartCount = count;
    });
  }

  toggleList() {
    this.showList = !this.showList;
  }
  removeFromCart(item, index) {
    this.cService.removeProduct(item, index);
  }

}
