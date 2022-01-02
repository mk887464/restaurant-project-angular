import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { NewDishDialogComponent } from './new-dish-dialog/new-dish-dialog.component';

const routes: Routes = [
  { path: "dishes", component: DishesComponent},
  { path: "dish/:id", component: DishDetailComponent},
  { path: "new-dish", component: NewDishDialogComponent},
  { path: "cart", component: CartComponent},
  { path: "", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
