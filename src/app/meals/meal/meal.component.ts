import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Meal,MealsService} from '../../services/meals.service';
import {recalculateData} from '../meal-slider/meal-slider.component';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
@Input() meal:Meal;
@Output() activeMealChange = new EventEmitter();
get mealCalories(){
  return recalculateData(this.meal);
}
get activeText(){
  return this.isActive(this.meal) ? 'Now active' : 'Make active';
};
get iconValue(){
  return this.isActive(this.meal) ? 'done_all' : 'done';
}

  constructor(private mealsService:MealsService) {

   }

  ngOnInit() {
  }

getClasses(){
  return {
    'green-outline':this.meal.type=='Breakfast',
    'yellow-outline':this.meal.type=='Second breakfast',
    'amber-outline':this.meal.type=='Lunch',
    'orange-outline':this.meal.type=='Dinner',
    'red-outline':this.meal.type=='Snack',
    'blue-outline':this.meal.type=='Supper',
  }
}
isActive(meal){
  return this.meal === this.mealsService.currentMeal;
  }

activeMeal(meal){
  this.activeMealChange.next(meal);
}


onItemDrop(source,target){
if(source.position === target.position){
	return;
}
let items = this.meal.items.slice();
let sourceIndex = items.findIndex((item)=>{
return item.position === source.position;
})
let targetIndex = items.findIndex((item)=>{
	return item.position === target.position;
});
items.splice(targetIndex,0,items.splice(sourceIndex,1)[0]);
items = items.map((item,index)=>{
    return Object.assign({},item,{
      position:index
    });
  });
this.meal.items = items;
}

onDeleteItem(item){
	this.mealsService.removeItem(item);
}
}
