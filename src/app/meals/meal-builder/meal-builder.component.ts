import { Component, OnInit,ViewChild,ElementRef,AfterViewInit } from '@angular/core';
import {Meal,MealsService} from '../../services/meals.service';
import { Validators, FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms'; 

declare var jQuery:any;
@Component({
  selector: 'app-meal-builder',
  templateUrl: './meal-builder.component.html',
  styleUrls: ['./meal-builder.component.scss']
})
export class MealBuilderComponent implements OnInit,AfterViewInit {
meal:Meal;
submitted:boolean = false;
mealForm:FormGroup;
typesOfMeal = [{title:'Breakfast',img:'/assets/images/main/breakfast.jpg'},
{title:'Second breakfast',img:'/assets/images/main/2breakfast.jpg'},
{title:'Lunch',img:'/assets/images/main/lunch.jpg'},
{title:'Snack',img:'/assets/images/main/snack.jpg'},{title:'Dinner',img:'/assets/images/main/dinner.jpg'},
{title:'Supper',img:'/assets/images/main/supper.jpg'}];
  constructor(private mealsService:MealsService,private formBuilder:FormBuilder,private el:ElementRef) { }

  ngOnInit(){

  	this.buildMealForm();
  	
  }

  buildMealForm(){
  	this.mealForm = this.formBuilder.group({
  		'name':['',[Validators.required,Validators.maxLength(12)]],
  		'typeOfMeal':['',Validators.required],
  		'description':['',Validators.required],
  		'items':[[]]
  	})
  }


  ngAfterViewInit(){
  	jQuery(this.el.nativeElement).find('#types').material_select();
  }

  onSubmit(event,mealForm:FormGroup,sel){
  	event.preventDefault();
  	this.submitted = true;
    let data=mealForm.value;
    data.imgUrl = assignImg.call(this.typesOfMeal,data.typeOfMeal);
    console.log(data.imgUrl);
    data.timeOftheDay = new Date().getTime();
  	if(!mealForm.valid) return;
  	this.mealsService.addMeal(data);
  }


}


function assignImg(type){
  let result ='';
  this.forEach((item)=>{
    if(item['title'] == type){
      result = item['img'];
    }
  })
  return result;
  }
