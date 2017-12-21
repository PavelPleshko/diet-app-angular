import { Component, OnInit,Input,HostListener,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-ingredient-single',
  templateUrl: './ingredient-single.component.html',
  styleUrls: ['./ingredient-single.component.scss'],
})
export class IngredientSingleComponent implements OnInit {
@Input() ingredient:any;
@Output() addIngredient = new EventEmitter();
  constructor() { }

onAddIngredient(ingredient,event){
	var ingredientObj = {
		item:ingredient,
		event:event
	}
	this.addIngredient.next(ingredientObj);
}
  ngOnInit() {
  }


}
