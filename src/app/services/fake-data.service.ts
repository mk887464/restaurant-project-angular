import {Injectable} from '@angular/core';
import {Dish} from "../shared/Dish";
import {KitchenTypeEnum} from "../shared/KitchenTypeEnum";
import {CategoryEnum} from "../shared/CategoryEnum";
import {CurrencyEnum} from "../shared/CurrencyEnum";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators'
import { doc, deleteDoc } from "firebase/firestore";
@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  dishes: Dish[] = [];

  cart: Dish[] = [];
  dishesRef: any
  constructor(private firestore: AngularFirestore) {
  }

  getDish(name: string): any {
    //return this.dishes.find(d=>d.name == name) || null
    return this.firestore.collectionGroup("dish").valueChanges()
    //return this.dishesRef.pipe(filter((d: any)=>d.name == name))
  }

  getDishes(): Observable<any> {
    return this.firestore.collectionGroup("dish").valueChanges()
    //.subscribe(res=>{
    //  console.log(res)
    //})
    //return this.dishes;
  }

  addNewDish(dish: Dish){
    //this.dishes.push(dish);
    this.firestore.collection("dish").add(dish)
    //this.dishesRef.push(dish)
  }

  removeDish(name: string){
    //this.dishes.splice(this.dishes.indexOf(this.dishes.find(d => d.name === name)!), 1);
    this.removeDishFromCart(name);
    //deleteDoc()
    //this.firestore.collection("dish").(dish)
  }

  rateDish(name: string, value: number){
    let index = this.dishes.indexOf(this.dishes.find(d => d.name === name)!);
    this.dishes[index].rating = value;
    this.dishes[index].alreadyRated = true;
  }

  addToCart(dish: Dish){
    let oldDish = this.cart.find(d => d.name === dish.name);
    if(oldDish !== undefined){
      oldDish.maxCount += 1;
    }else {
      oldDish = Object.assign({}, dish);
      oldDish.maxCount = 1;
      this.cart.push(oldDish);
    }
  }

  removePositionFromCart(name: string){
    let oldDish = this.cart.find(d => d.name === name);
    if(oldDish!.maxCount === 1){
      this.removeDishFromCart(oldDish!.name);
    }else{
      oldDish!.maxCount -= 1;
    }
  }

  removeDishFromCart(name: string){
    let oldDish = this.cart.find(d => d.name === name);
    if(oldDish !== undefined){
      this.cart.splice(this.cart.indexOf(oldDish), 1);
    }
  }

  getCount(name:string){
    let dish = this.cart.find(d => d.name === name);
    if(dish !== undefined){
      return dish.maxCount;
    }

    return 0;
  }

  getCart(){
    return this.cart;
  }

  getCartSum(){
    return this.cart.reduce((n, {maxCount}) => n + maxCount, 0);
  }
}
