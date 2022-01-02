import { Component, OnInit } from '@angular/core';
import {FakeDataService} from "../services/fake-data.service";
import {Dish} from "../shared/Dish";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  dishes: Dish[] = [];

  constructor(private fakeDataService:FakeDataService) {
    this.dishes = fakeDataService.getCart();
  }

  ngOnInit(): void {
  }

  getCountInCart(name:string){
    return this.fakeDataService.getCount(name);
 }
}
