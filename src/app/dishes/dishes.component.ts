import {Component, OnInit} from '@angular/core';
import {Dish} from "../shared/Dish";
import {MatDialog} from "@angular/material/dialog";
import {NewDishDialogComponent} from "../new-dish-dialog/new-dish-dialog.component";
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {KitchenTypeEnum} from "../shared/KitchenTypeEnum";
import {CategoryEnum} from "../shared/CategoryEnum";
import {FormControl} from "@angular/forms";
import {FakeDataService} from "../services/fake-data.service";

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  dishes: Dish[];

  dropdownTypesList = [];
  selectedTypesItems = [];

  dropdownCategoriesList = [];
  selectedCategoriesItems = [];

  dropdownRatingList = [];
  selectedRatingItems = [];

  dropdownSettings: IDropdownSettings | undefined;

  types: KitchenTypeEnum[] = [];
  categories: CategoryEnum[] = [];
  rating: number[] = [];

  from = new FormControl('', );
  to = new FormControl('', );

  constructor(public dialog: MatDialog, private fakeDataService:FakeDataService) {
    this.dishes = fakeDataService.getDishes();
  }


  ngOnInit(): void {

    this.updateData();

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Zaznacz wszystkie',
      unSelectAllText: 'Odznacz wszystkie',
      itemsShowLimit: 5,
      allowSearchFilter: false
    };


  }

  getMostExpensive(){
    return Math.max.apply(Math, this.dishes.map(function(d) { return d.price; }));
  }

  getCheapest(){
    return Math.min.apply(Math, this.dishes.map(function(d) { return d.price; }));
  }

  addToCart(dish: Dish){
    this.fakeDataService.addToCart(dish);
  }

  removeFromCart(name: string){
    this.fakeDataService.removePositionFromCart(name);
  }

  openNewDishDialog() {
    this.dialog.open(NewDishDialogComponent).afterClosed().subscribe(result => {
      if (result) {
        this.fakeDataService.addNewDish(result);
        this.updateData();
      }
    });
  }

  removeDish(name: string) {
    this.fakeDataService.removeDish(name);
    this.updateData();
  }

  getCountInCart(name: string){
    return this.fakeDataService.getCount(name);
  }

  onRatingValueChange($event: number, name: string) {
    let index = this.dishes.indexOf(this.dishes.find(d => d.name === name)!);
    this.dishes[index].rating = $event;
    this.dishes[index].alreadyRated = true;

    this.fakeDataService.rateDish(name, $event);

    this.updateData();
  }

  onItemSelect(item: any) {
    this.applyFilters();
  }

  onItemDeselect(item: any){
    this.applyFilters();
  }

  onSelectAll(items: any) {
    this.applyFilters();
  }

  onDeselectAll(items: any){
    this.applyFilters();
  }

  updateData() {

    this.dropdownTypesList = [];
    this.types = [];
    for(let dish of this.dishes){
      if(this.types.indexOf(dish.type) === -1){
        this.types.push(dish.type);
        // @ts-ignore
        this.dropdownTypesList.push({item_id: this.types.length + 1, item_text: dish.type});
      }
    }

    this.dropdownCategoriesList = [];
    this.categories = [];
    for(let dish of this.dishes){
      if(this.categories.indexOf(dish.category) === -1){
        this.categories.push(dish.category);
        // @ts-ignore
        this.dropdownCategoriesList.push({item_id: this.categories.length + 1, item_text: dish.category});
      }
    }

    this.dropdownRatingList = [];
    this.rating = [];

    for (let dish of this.dishes) {
      if (dish.rating > 0 && this.rating.indexOf(dish.rating) === -1) {
        this.rating.push(dish.rating);
        // @ts-ignore
        this.dropdownRatingList.push({item_id: this.rating.length + 1, item_text: dish.rating});
      }
    }
  }

  priceChanged(){
    this.applyFilters();
  }

  applyFilters(){
    this.dishes = this.fakeDataService.getDishes();

    if(this.selectedTypesItems.length > 0) {
      // @ts-ignore
      this.dishes = this.dishes.filter(d => this.selectedTypesItems.find(st => st.item_text === d.type) !== undefined);
    }
    if(this.selectedCategoriesItems.length > 0) {
      // @ts-ignore
      this.dishes = this.dishes.filter(d => this.selectedCategoriesItems.find(st => st.item_text === d.category) !== undefined);
    }
    console.log(this.selectedRatingItems);
    if(this.selectedRatingItems.length > 0) {
      // @ts-ignore
      this.dishes = this.dishes.filter(d => this.selectedRatingItems.find(st => st.item_text === d.rating) !== undefined);
    }

    if(this.from.value > 0 && this.to.value > this.from.value){
      this.dishes = this.dishes.filter(d => d.price >= this.from.value && d.price <= this.to.value );
    }

  }

  getCartSum(){
    return this.fakeDataService.getCartSum();
  }
}
