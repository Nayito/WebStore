import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: Product[];

  constructor(private dService: DataService, private cService: CartService) { }

  ngOnInit() {
    // attach our productList to the array in our Data Service.
    this.productList = this.dService.getProducts();
  }

  addToCart(product) {
    this.cService.addItemsToCart(product);
  }
}
