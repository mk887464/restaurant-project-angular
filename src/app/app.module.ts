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
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatChipsModule} from "@angular/material/chips";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgRatingBarModule } from 'ng-rating-bar';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CartComponent } from './cart/cart.component';
import {RouterModule} from "@angular/router";
import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PaginacjaComponent } from './paginacja/paginacja.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { DishReviewComponent } from './dish-review/dish-review.component';
import { DishReviewsComponent } from './dish-reviews/dish-reviews.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    DishesComponent,
    NewDishDialogComponent,
    CartComponent,
    MenuComponent,
    DishDetailComponent,
    HomeComponent,
    PaginacjaComponent,
    DishReviewComponent,
    DishReviewsComponent
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
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatOptionModule,
    MatInputModule,
    MatChipsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    NgRatingBarModule,
    NgMultiSelectDropDownModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'mytestapp'),
    AngularFireDatabaseModule, // Only required for database features
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}},
    {
      provide: MatDialogRef,
      useValue: {}
    },
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
