import {Injectable} from '@angular/core';
import {Dish} from "../shared/Dish";
import {KitchenTypeEnum} from "../shared/KitchenTypeEnum";
import {CategoryEnum} from "../shared/CategoryEnum";
import {CurrencyEnum} from "../shared/CurrencyEnum";

@Injectable({
  providedIn: 'root'
})
export class FakeDataService {

  dishes: Dish[] = [];

  cart: Dish[] = [];
  constructor() {
    this.dishes = [];

    this.dishes.push(new Dish("Kluski francuskie", KitchenTypeEnum.french, CategoryEnum.dinner, ["Mięso", "Ziemniaki"],
      15, 12.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://1.bp.blogspot.com/-gehOSf5THLw/WU_UCIjHdUI/AAAAAAAAXdU/tJaW15rP3sE0-n_SmIZHjeFoACLZyIE9QCLcBGAs/s1600/IMG_9884.JPG", "url2"], CurrencyEnum.EUR));

    this.dishes.push(new Dish("Pizza Margherita", KitchenTypeEnum.italian, CategoryEnum.dinner, ["Mięso", "Ziemniaki"],
      10, 8.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://assets.biggreenegg.eu/app/uploads/2018/06/28115815/topimage-pizza-special17-800x500.jpg", "url2"], CurrencyEnum.EUR));

    this.dishes.push(new Dish("Pizza Hawajska", KitchenTypeEnum.italian, CategoryEnum.dinner, ["Mięso", "Ziemniaki"],
      5, 9.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://prostepesto.pl/wp-content/uploads/2020/11/hawajska-pizza.jpg", "url2"], CurrencyEnum.EUR));

    this.dishes.push(new Dish("Chłodnik z ogórków", KitchenTypeEnum.polish, CategoryEnum.soup, ["Mięso", "Ziemniaki"],
      15, 3.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://niebonatalerzu.pl/wp-content/uploads/2018/06/chlodnik-z-ogorkow.jpg", "url2"], CurrencyEnum.EUR));

    this.dishes.push(new Dish("Żurek Śląski", KitchenTypeEnum.polish, CategoryEnum.soup, ["Mięso", "Ziemniaki"],
      15, 5.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://kulinarnapolska.org/wp-content/uploads/2020/04/zur-slaski-przepis-jak-zrobic-1-1.jpg", "url2"], CurrencyEnum.EUR));

    this.dishes.push(new Dish("Zupa cytrynowa wytrawna", KitchenTypeEnum.indian, CategoryEnum.soup, ["Mięso", "Ziemniaki"],
      15, 6.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/d82dec70eaaf6ad69f5fe0a18dc02aee/Derivates/b5d1aebed0b3dd70e8002478663517b125adae79.jpg", "url2"], CurrencyEnum.EUR));

    this.dishes.push(new Dish("Omlet z szynką i groszkiem", KitchenTypeEnum.polish, CategoryEnum.breakfast, ["Mięso", "Ziemniaki"],
      15, 2.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://cdn.galleries.smcloud.net/t/galleries/gf-NBtD-Uzbg-iPT4_omlet-z-szynka-papryka-i-zielonym-groszkiem-664x442-nocrop.jpg", "url2"], CurrencyEnum.EUR));

    this.dishes.push(new Dish("Omlet cesarski", KitchenTypeEnum.polish, CategoryEnum.breakfast, ["Mięso", "Ziemniaki"],
      15, 3.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/omlet_cesarski_z_truskawkami_02.jpg", "url2"], CurrencyEnum.USD));

    this.dishes.push(new Dish("Parówki panierowane", KitchenTypeEnum.international, CategoryEnum.breakfast, ["Mięso", "Ziemniaki"],
      15, 7.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://ocdn.eu/pulscms-transforms/1/H_Kk9kqTURBXy81N2RmNzYyNTYwMjgxOTIyZWRhYmU1ZWE4OWQzN2NkMS5qcGVnk5UDAB3NBXzNAxaTCaZjZGE4ZDMGkwXNBLDNAnaBoTAB/parowki-panierowane-z-sosem-wiosennym.jpg", "url2"], CurrencyEnum.EUR));

    this.dishes.push(new Dish("Karkówka sezamkowa", KitchenTypeEnum.international, CategoryEnum.mainDish, ["Mięso", "Ziemniaki"],
      15, 15.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://i.pinimg.com/originals/82/da/73/82da73e132d7c9b199adcb89100c1246.jpg", "url2"], CurrencyEnum.USD));

    this.dishes.push(new Dish("Kaszanka z grilla z jabłkiem", KitchenTypeEnum.international, CategoryEnum.mainDish, ["Mięso", "Ziemniaki"],
      15, 18.99, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://1.bp.blogspot.com/-Q-xxytbRU58/YKAK8HzAWmI/AAAAAAAAMQU/JZFu5Lq9irkfxwr4royKX9r9VTc9AAT-gCLcBGAsYHQ/s2048/IMG_20210514_174341.jpg", "url2"], CurrencyEnum.USD));

    this.dishes.push(new Dish("Makaron puttanesca", KitchenTypeEnum.italian, CategoryEnum.vegan, ["Mięso", "Ziemniaki"],
      15, 11.49, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, labore? Odio rerum natus deserunt, veniam voluptate dolores debitis repellendus facere!", ["https://www.everyday-delicious.pl/wp-content/uploads/2019/12/pasta-alla-puttanesca-everyday-delicious-2.jpg", "url2"], CurrencyEnum.USD));

  }

  getDishes():Dish[] {
    return this.dishes;
  }

  addNewDish(dish: Dish){
    this.dishes.push(dish);
  }

  removeDish(name: string){
    this.dishes.splice(this.dishes.indexOf(this.dishes.find(d => d.name === name)!), 1);
    this.removeDishFromCart(name);
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
