import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = [];
  public $cartItems = new BehaviorSubject<Product[]>(this.cartItems);

  cartTotal = 0;
  $cartTotal = new BehaviorSubject<number>(this.cartTotal);

  cartQuantity = 0;
  $cartQuantity = new BehaviorSubject<number>(this.cartQuantity);

  constructor() { }

  addItemsToCart(item: Product) {
    const cartItem = this.cartItems.find(x => x.id === item.id);
    this.cartQuantity++;
    if (cartItem) {
      cartItem.quantity++;
    } else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    console.log(this.cartItems);
    this.cartTotal += +item.price;

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }

  removeProduct(item: Product, index) {
    this.cartItems.splice(index, 1);
    const totalPrice = item.quantity * +item.price;
    this.cartTotal -= totalPrice;
    this.cartQuantity -= item.quantity;

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }
}
