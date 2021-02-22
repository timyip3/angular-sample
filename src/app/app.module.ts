import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./product-list/product-list.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductAlertComponent } from "./product-alerts/product-alerts.component";
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailComponent},
      { path: 'cart', component: CartComponent}
    ]) 
  ],
  declarations: [ 
    AppComponent, 
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    CartComponent
  ],
  bootstrap: [ 
    AppComponent
  ],
  exports: [ProductDetailComponent]
})
export class AppModule { }
