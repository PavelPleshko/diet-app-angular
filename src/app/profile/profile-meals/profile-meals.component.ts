import { Component, OnInit } from '@angular/core';
import {MealsService,Meal} from '../../services/meals.service';
@Component({
  selector: 'app-profile-meals',
  templateUrl: './profile-meals.component.html',
  styleUrls: ['./profile-meals.component.scss']
})
export class ProfileMealsComponent implements OnInit {
meals:Meal[]=[];
limit:number = 5;
limitedMeals:Meal[];
  constructor(private mealsService:MealsService) { }

  ngOnInit() {
  	this.meals = this.mealsService.currentRation.items;
  	this.limitedMeals = this.meals.slice(0,this.limit);
  }

  showMore(){
  	
  }
}
