import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {DishMakerService} from '../../services/dish-maker.service';
@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  constructor(private dishMaker:DishMakerService) { }
ingredients:any = [];
  ngOnInit() {
  	this.dishMaker.getIngredients().subscribe((data)=>{
  		this.ingredients = data;
  	})
  }
  addNewIngredient(obj){
  	this.dishMaker.addIngredient(obj);
  	console.log(obj);
  }

}
