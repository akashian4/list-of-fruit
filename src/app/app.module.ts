import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms'
import { CountComponent } from './components/count/count.component';
import { IncrementComponent } from './increment/increment.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { Nested1Component } from './nested1/nested1.component';
import { Nested2Component } from './nested2/nested2.component';


@NgModule({
  declarations: [
    AppComponent,
    CountComponent,
    IncrementComponent,
    HomeComponent,
    ProductComponent,
    DetailsProductComponent,
    Nested1Component,
    Nested2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
