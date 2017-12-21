import { Component, OnInit,Input,ElementRef,AfterViewInit } from '@angular/core';
import {Meal,MealItem,calculateNeeds} from '../../services/meals.service';

declare var jQuery:any;
@Component({
  selector: 'app-meal-elements',
  templateUrl: './meal-elements.component.html',
  styleUrls: ['./meal-elements.component.scss']
})
export class MealElementsComponent implements OnInit,AfterViewInit {
@Input() meal:Meal;
private items:MealItem[]=[];
totalVitamins;
totalMinerals;
totalNutrients;
nutritionSchema;
currentRatio;

  constructor(private el:ElementRef) { 
  this.totalVitamins=[];
  this.totalMinerals=[];
  this.totalNutrients=[];	
  this.nutritionSchema = calculateNeeds();
 

  }


 ngAfterViewInit(){

  	jQuery(this.el.nativeElement).find('.collapsible').collapsible();
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


  createDiagram(items:MealItem[]){
  	if(!items) return;
  	let vitamins = this.handleArray(items,'vitamins');
  	let minerals = this.handleArray(items,'minerals');
  	let nutrients = this.handleArray(items,'nutrients');
  	this.totalVitamins = this.findTotal(vitamins);
  	this.totalNutrients = this.findTotal(nutrients);
  	this.totalMinerals = this.findTotal(minerals);
  }

  private handleArray(items,option){
  	if(!items || !option) return;
  	var arrayOfItems = items.map((item:MealItem)=>{
  		var itemCount = item.count;
  		return item.meal[option].map((item)=>{
  			return {title:item.title,
  				amount:item.amount*itemCount,
  				normForMeal:+(item.RDA*itemCount / parseFloat(this.currentRatio)).toFixed(1),
          RDA:+(item.RDA*itemCount).toFixed(1)
        };
  		})
  	});
  	return arrayOfItems;
  }

  private findTotal(array){
  	var _tempTotal=[];
  	array.map((item)=>{		
  		item.forEach((subitem)=>{
  			var idx = _tempTotal.findIndex((item)=>{
  				return item.title === subitem.title
  			});
  			if(idx<0){
          subitem.normForMeal= +(subitem.RDA / parseFloat(this.currentRatio)).toFixed(1);
  				_tempTotal.push(subitem);
  			}else{
  				 _tempTotal[idx].amount = _tempTotal[idx].amount + subitem.amount;
  				  _tempTotal[idx].RDA = _tempTotal[idx].RDA + subitem.RDA;
             _tempTotal[idx].normForMeal = _tempTotal[idx].normForMeal + subitem.RDA;
  				 _tempTotal[idx]={
  				 	title:subitem.title,
  				 	amount:_tempTotal[idx].amount,
  				 	RDA:_tempTotal[idx].RDA,
            normForMeal: _tempTotal[idx].normForMeal
  				 }
  			}
  		})
  	})
    console.log(_tempTotal);
  	return _tempTotal;
  }
 

  ngOnInit() {
  	
  }

  ngOnChanges(changes){
  	if(this.meal){
       this.getMealRatio(this.nutritionSchema);
  		this.items = this.meal.items;
  		this.createDiagram(this.items);
  	}
  }


}
