import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IncrementComponent } from './increment/increment.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'count', component: ProductComponent },
  { path: 'increment', component: IncrementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
