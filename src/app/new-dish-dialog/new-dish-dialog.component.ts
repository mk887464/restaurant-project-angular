import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {KitchenTypeEnum} from "../shared/KitchenTypeEnum";
import {CategoryEnum} from "../shared/CategoryEnum";
import {COMMA, ENTER} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {Dish} from "../shared/Dish";

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CurrencyEnum} from "../shared/CurrencyEnum";

@Component({
  selector: 'app-new-dish-dialog',
  templateUrl: './new-dish-dialog.component.html',
  styleUrls: ['./new-dish-dialog.component.css']
})
export class NewDishDialogComponent implements OnInit {

  ingredients: string[] = [];
  images: string[] = [];

  types: KitchenTypeEnum[];
  selectedType: string | undefined;

  categories: CategoryEnum[];
  selectedCategory: string | undefined;

  currencies: CurrencyEnum[];
  selectedCurrency: string | undefined;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  dishForm: FormGroup | undefined;

  constructor(private dialogRef: MatDialogRef<NewDishDialogComponent>, private fb: FormBuilder) {
    this.types = Object.values(KitchenTypeEnum);
    this.categories = Object.values(CategoryEnum);
    this.currencies = Object.values(CurrencyEnum);
  }

  ngOnInit(): void {
    this.dishForm = this.fb.group({
      name : ['', Validators.required],
      type: ['', Validators.required],
      category: ['', Validators.required],
      currency: ['', Validators.required],
      maxCount: ['', Validators.required, Validators.min(1)],
      description: ['', Validators.required],
      price: ['', Validators.required, Validators.min(1)]
    });
  }

  addIngredient(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.ingredients?.push(value);
    }
    event.chipInput!.clear();
  }

  removeIngredient(keyword: string): void {
    const index = this.ingredients!.indexOf(keyword);

    if (index >= 0) {
      this.ingredients!.splice(index, 1);
    }
  }

  addImage(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.images?.push(value);
    }
    event.chipInput!.clear();
  }

  removeImage(keyword: string): void {
    const index = this.images!.indexOf(keyword);

    if (index >= 0) {
      this.images!.splice(index, 1);
    }
  }

  isNotCompleted(){
    return this.dishForm?.get('name')?.invalid || this.dishForm?.get('description')?.invalid || this.dishForm?.get('price')?.invalid
      || this.dishForm?.get('maxCount')?.invalid || this.dishForm?.get('type')?.invalid
        || this.dishForm?.get('category')?.invalid;
  }

  onSubmit(form: FormGroup) {
    let dish = new Dish(form.value.name, form.value.type, form.value.category, this.ingredients, form.value.maxCount, form.value.price, form.value.description, this.images, form.value.currency);
    this.dialogRef.close(dish);
  }
}
