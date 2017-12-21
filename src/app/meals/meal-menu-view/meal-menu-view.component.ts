import { Component, OnInit,OnDestroy } from '@angular/core';
import {MealsService,Meal} from '../../services/meals.service';

@Component({
  selector: 'app-meal-menu-view',
  templateUrl: './meal-menu-view.component.html',
  styleUrls: ['./meal-menu-view.component.scss']
})
export class MealMenuViewComponent implements OnInit,OnDestroy {
meal:Meal;
mealSubscription;
showMore:boolean = false;
croppedItems = [];


get captionItems(){
	let caption = this.itemsDisplayRemainder == 1 ? ' more item' : ' more items';
	return caption;
}

get itemsDisplayRemainder(){
	return this.meal.items.length - this.croppedItems.length;
}
  constructor(private mealsService:MealsService) { 
  	this.mealSubscription = this.mealsService.meal$.subscribe((data)=>{
  		this.meal = data;
  		this.croppedItems = this.meal.items;
  		if(this.croppedItems && this.croppedItems.length > 3){
  			this.cropItems();
  		}
  	})}

  ngOnInit() {
  }
  ngOnDestroy(){
  	this.mealSubscription.unsubscribe();
  }

  cropItems(){
  	this.croppedItems = this.croppedItems.slice(0,3);
  	this.showMore = true;
  }


}
