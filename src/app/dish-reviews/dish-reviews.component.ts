import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-reviews',
  templateUrl: './dish-reviews.component.html',
  styleUrls: ['./dish-reviews.component.css'],
  inputs: ['reviews']
})
export class DishReviewsComponent implements OnInit {

  reviews: any[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
