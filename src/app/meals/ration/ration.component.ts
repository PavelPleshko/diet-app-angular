import { Component } from '@angular/core';
import {MealsService,Meal,Ration} from '../../services/meals.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-ration',
  templateUrl: './ration.component.html',
  styleUrls: ['./ration.component.scss']
})
export class RationComponent{
ration:Ration;
date;
  constructor(private mealsService:MealsService) {
  	this.ration = mealsService.currentRation;
  	this.date = new Date();
   }


  onActiveMealChange(meal){
  	this.mealsService.selectCurrentMeal(meal.id);
  }
}
