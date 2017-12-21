import { Injectable } from '@angular/core';
import {ProductModel} from '../product/product.model';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


export interface MealItem {
	position:number;
	name:string;
	meal:ProductModel;
	count:number;
}

export class Meal {
	name:string;
	id:number = null;
  imgUrl:string='';
	description:string;
	createdAt:string;
  type:string;
	position:number;
	count:number = 0;
	items:MealItem[]=[];
	nextMeal:string;
}

export class Ration {
	day:Date = new Date();
	name:string;
	items:Meal[]=[];
	balanceRate:number = 0;
	deleted:boolean=false;
	nutritionalIndex:number;
}

export function calculateNeeds(profile?){
  let standard = false;
  let standardSchema = {'Breakfast':0.2,'Second breakfast':0.1,'Lunch':0.3,'Snack':0.1,'Dinner':0.2,'Supper':0.1};
  if(!profile) standard = true;
 if(standard){
   return standardSchema;
 }else{
   switch (profile.goal) {
     case "Mass_gain":
       // code...
       break;
     case "Weight_loss":
       // code...
       break;
       case "Get_healthy":
       // code...
       break;
     default:
       // code...
       break;
   }
 }
  } 



@Injectable()
export class MealsService {
	meal$:Subject<Meal> = new BehaviorSubject<Meal>(null);
	ration$:Subject<Ration> = new BehaviorSubject(null);
	currentRation:Ration = new Ration();
	currentMeal:Meal = new Meal();

  constructor() {
  this.currentMeal.name = 'My first Meal';
  this.currentMeal.type = 'Breakfast';
  this.currentMeal.id = 1;
  this.currentRation.items.push(this.currentMeal);
  this.meal$.next(this.currentMeal);
//  this.ration$.next(this.currentRation);
   }


  addProduct(product:ProductModel){

  	let item:MealItem = this.findItem(product.title);
  	if(item){
  		item.count++;
  	}else{
  		item={
  			name:product.title,
  			position:this.getPosition(),
  			count:1,
  			meal:product
  		};
  		this.currentMeal.items.push(item);
  	}
  	this.currentMeal.count++;
    this.currentMeal.items.splice(this.currentMeal.items.indexOf(item),1,item);
    this.meal$.next(this.currentMeal);
  	return item;
  }

  selectCurrentMeal(id:number){
  	let meal = this.findMeal(id);
  	if(!meal || this.currentMeal.id == meal.id){
  		return;
  	}
  	this.currentMeal =meal;
  	this.meal$.next(this.currentMeal);
  }

  findMeal(id:number):Meal{
  	let meal = this.currentRation.items.find((meal)=>{
  		return meal.id == id;
  	})
  	return meal;
  }


  addMeal(data){
  	let meal = new Meal();
  	meal.name = data.name;
    meal.imgUrl = data.imgUrl;
  	meal.description = data.description;
  	meal.createdAt = data.timeOftheDay;
    meal.type = data.typeOfMeal;
  	meal.id = this.currentRation.items.length + 1;
  	this.currentRation.items.push(meal);
    console.log(meal);
  	return meal;
  }

  findItem(title):MealItem{
  	for(let i=0;i<this.currentMeal.items.length;i++){
  		if(this.currentMeal.items[i].name === title){
  			return this.currentMeal.items[i];
  		}
  	}
  	return null;
  }

  getPosition(){
  	let position = 0;
  	if(this.currentMeal.items.length === 0 || this.currentMeal.items.length === null){
  		return position;
  	}else{
  		position = this.currentMeal.items.length;
  		return position;
  	}
  }

  removeProduct(item:MealItem){
    let product = this.findItem(item.meal.id);
    if(product){
    product.count--;
    if(!product.count){
      this.remove(product);
      product = null;
    }
    this.currentMeal.count--;
  }
  return product;
  }

  removeItem(item:MealItem){
    this.remove(item);
  	this.currentMeal.count -=item.count;
  }

remove(item:MealItem){
let indx:number = this.currentMeal.items.indexOf(item);
  if(indx !== -1){
    this.currentMeal.items.splice(indx,1);
  }
}

  clearMealFromRation(meal:Meal){
  	let mealToClear = this.currentRation.items.findIndex((mealIndex)=>{
  		 return mealIndex.id == meal.id;
  	});
  	console.log(mealToClear);
  	if(mealToClear < 0){
  		return;
  	}
  	this.meal$.next(null);
  	return this.currentRation.items.splice(mealToClear,1);
  }


  clearMeal(meal:Meal){
  	let mealToClear = this.currentRation.items.find((mealIndex)=>{
  		 return mealIndex.id == meal.id;
  	});
  	if(!mealToClear){
  		return;
  	}
  	let mealToClearIndx = this.currentRation.items.findIndex((mealIndex)=>{
  		 return mealIndex.id == meal.id;
  	});
  	mealToClear.count=0;
  	mealToClear.items=[];
  	mealToClear.nextMeal=null;
  	this.currentRation.items.splice(mealToClearIndx,1,mealToClear);
  	this.meal$.next(mealToClear);
  }


}
