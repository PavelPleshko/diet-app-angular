import { Component, OnInit} from '@angular/core';
import {Meal,MealsService,MealItem,Ration} from '../services/meals.service';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit{
meal:Meal;
dailyNeed;
mealTotal;
done;
overeating;
  constructor(private mealsService:MealsService,private router:Router,
    private route:ActivatedRoute) {
     this.mealsService.meal$.subscribe(data=>{
 let meal = new Meal();
 Object.assign(meal,data);
  this.meal=meal;
})
}

  ngOnInit() {
    this.getDailyNormFromLs();
    var b = Observable.interval(1000).take(5).shareReplay()
    b.subscribe(data=>console.log(data));
    setTimeout(()=>{
      b.subscribe((value)=>{
        console.log(value);
      })
    },2000)
     }

getDailyNormFromLs(){
  if(window.localStorage != undefined || window.localStorage != null){
    var item = JSON.parse(window.localStorage.getItem('profile'));
    this.dailyNeed = item.calories;
    return this.dailyNeed;
  }
}


  clearMeal(meal:Meal){
  	this.mealsService.clearMeal(meal);
  }

  deleteMeal(meal:Meal){
  	this.mealsService.clearMealFromRation(meal);
  }


update(value, item){
   let res = value - item.count;
        if (res > 0) {
            for (let i = 0; i < res; i++) {
                this.mealsService.addProduct(item.meal);
            }
        } else if (res < 0) {
            for (let i = 0; i < -res; i++) {
                this.mealsService.removeProduct(item);
            }
        }

       return value;
}

}
