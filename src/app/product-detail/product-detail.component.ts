import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { products } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {

  product: any;
  
  constructor(private route: ActivatedRoute, private cartService: CartService) { 
    
  }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    const productIdFromRoute = Number.parseInt(params.get('productId'));

    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
