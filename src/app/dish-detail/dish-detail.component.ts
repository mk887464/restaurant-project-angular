import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FakeDataService } from '../services/fake-data.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {
  
  routeSub: any;
  dish: any = null
  addReviewVisible: boolean = false
  constructor(private route: ActivatedRoute, private fakeDataService: FakeDataService, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      const name = params['id'] // name
      this.firestore.collectionGroup("dish").valueChanges().subscribe(dishes=>{
        this.dish = dishes.find((d: any)=>d.name == name)
      })
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  reviews: any = []
  onAdded(e: any){
    this.reviews.push(e)
    this.addReviewVisible = false
  }

  getCountInCart(name: string){
    return this.fakeDataService.getCount(name);
  }

  removeFromCart(name: string){
    this.fakeDataService.removePositionFromCart(name);
  }

  removeDish(name: string) {
    this.fakeDataService.removeDish(name);
  }

  addToCart(dish: any){
    this.fakeDataService.addToCart(dish);
  }

  onRatingValueChange($event: number, name: string) {
    this.dish.rating = $event;
    this.dish.alreadyRated = true;

    //this.fakeDataService.rateDish(name, $event);
  }
}
