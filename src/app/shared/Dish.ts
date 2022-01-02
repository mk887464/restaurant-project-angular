import {KitchenTypeEnum} from "./KitchenTypeEnum";
import {CategoryEnum} from "./CategoryEnum";
import {CurrencyEnum} from "./CurrencyEnum";

export class Dish{
  name:string;
  type:KitchenTypeEnum;
  category:CategoryEnum;
  ingredients:string[];
  maxCount:number;
  price:number;
  description:string;
  currency:CurrencyEnum;
  photos:string[];

  rating:number;
  alreadyRated: boolean;

  constructor(name:string, type:KitchenTypeEnum, category:CategoryEnum, ingredients:string[], maxCount:number, price:number, description:string,
              photos:string[], currency:CurrencyEnum) {
    this.name = name;
    this.type = type;
    this.category = category;
    this.ingredients = ingredients;
    this.maxCount = maxCount;
    this.price = price;
    this.description = description;
    this.photos = photos;
    this.currency = currency;

    this.rating = 0;
    this.alreadyRated = false;
  }
}
