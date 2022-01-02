import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DishesComponent } from './dishes/dishes.component';

import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { NewDishDialogComponent } from './new-dish-dialog/new-dish-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgRatingBarModule } from 'ng-rating-bar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CartComponent } from './cart/cart.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    NewDishDialogComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatChipsModule,
    ReactiveFormsModule,
    NgRatingBarModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: DishesComponent},
      {
        path: 'cart',
        component: CartComponent
      }
    ])
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
