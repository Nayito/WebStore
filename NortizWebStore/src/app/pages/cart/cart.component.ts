import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  productList: Product[] = [];
  cartCount = 0;
  cartItems: Product[] = [];
  showList = false;

  constructor(private cService: CartService) { }

  ngOnInit() {
    this.cService.$cartItems.subscribe(items => {
      this.cartItems = items;
    });
    this.cService.$cartQuantity.subscribe(count => {
      this.cartCount = count;
    });
  }

  addToCart(product) {
    this.cService.addItemsToCart(product);
  }
  toggleList() {
    this.showList = !this.showList;
  }
  removeFromCart(item, index) {
    this.cService.removeProduct(item, index);
  }
}

