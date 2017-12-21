import { Component, OnInit,Input,AfterViewInit,Output,EventEmitter } from '@angular/core';
import {ProductModel} from '../../product/product.model';
@Component({
  selector: 'app-ration-meals-item',
  templateUrl: './ration-meals-item.component.html',
  styleUrls: ['./ration-meals-item.component.scss']
})
export class RationMealsItemComponent implements OnInit,AfterViewInit {
@Input() item;
totalCalories;
calories;
@Output() deleteItemEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  	console.log(this.item);
  	this.calculateNutrients();
  }
ngAfterViewInit(){
	
}
  calculateNutrients(){
  	this.calories = this.item.meal.nutrients.find((nutrient)=>{
  		return nutrient.title == "energy"
  	}).amount;
  	this.calcTotalCalories();
  }

  calcTotalCalories(){
  	this.totalCalories = this.calories * this.item.count;
  }

  deleteItem(item,event){
    event.preventDefault();
    this.deleteItemEvent.next(item);
  }

}
