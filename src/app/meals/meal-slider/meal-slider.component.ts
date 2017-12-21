import { Component,Input,ChangeDetectionStrategy } from '@angular/core';
import {calculateNeeds} from '../../services/meals.service';

export function recalculateData(meal){
    let unwrappedItems=[];
meal.items.map((item)=>{
  let unwrappedItem = {
    title:item.name,
    count:item.count,
    calories:item.meal.nutrients.find((nut)=>nut.title=="energy"),
    total:null
  }
  unwrappedItem.total = unwrappedItem.calories.amount * unwrappedItem.count;
  unwrappedItems.push(unwrappedItem);
})
  let mealTotal = calculateSubstance(unwrappedItems);
  return mealTotal;
  }


 export function calculateSubstance(items){
    return items.map((item)=>item.total).reduce((acc,sub)=>{
      return acc+sub;
    },0);
}



@Component({
  selector: 'app-meal-slider',
  templateUrl: './meal-slider.component.html',
  styleUrls: ['./meal-slider.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MealSliderComponent {
@Input() meal;
//@Input() num;
@Input() dailyNeed;
@Input() height;
mealTotal;
forDay;
forMeal;
overeatingForDay;
overeatingForMeal;
nutritionSchema;
currentRatio;
  constructor() {}

  ngOnChanges(changes){
     this.nutritionSchema = calculateNeeds();
    this.getMealRatio(this.nutritionSchema);
    console.log(this.nutritionSchema,this.currentRatio);
  		this.mealTotal = recalculateData(this.meal);
  	if(this.dailyNeed < this.mealTotal)
  {
    this.forDay = +(this.mealTotal / this.dailyNeed * 100).toFixed(1);
    this.overeatingForDay=+(this.forDay - 100).toFixed(1);

    this.forMeal = +((this.mealTotal / this.dailyNeed * 100)/parseFloat(this.currentRatio)).toFixed(1);
   
  }else{

     this.forDay = +(this.mealTotal / this.dailyNeed * 100).toFixed(1);
     this.forMeal = +((this.mealTotal / this.dailyNeed * 100)/parseFloat(this.currentRatio)).toFixed(1);
      if(this.dailyNeed*this.currentRatio < this.mealTotal){
       this.overeatingForMeal=+(this.forMeal - 100).toFixed(1);
    }else{
      this.overeatingForMeal=0;
    }
     this.overeatingForDay=0;
     
  }
  }

getMealRatio(schema){
if(!schema) return;
for (var type in schema) {
  if(type==this.meal.type){
    this.currentRatio = schema[type];
    return;
  }
}
}

 
}
