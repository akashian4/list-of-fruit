import { Nested2Component } from "./nested2/nested2.component";
import { Nested1Component } from "./nested1/nested1.component";
import { DetailsProductComponent } from "./details-product/details-product.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { IncrementComponent } from "./increment/increment.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
    
      {
        path: "1",
        component: Nested1Component
        // outlet: 'nested'
      },
      {
        path: "2",
        component: Nested2Component
        // outlet: 'nested'
      }
    ]
  },
  { path: "count", component: ProductComponent },
  { path: "increment", component: IncrementComponent },
  { path: "count/:name/:counter", component: DetailsProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
