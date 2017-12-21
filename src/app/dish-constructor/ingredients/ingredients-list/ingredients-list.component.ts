import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss']
})
export class IngredientsListComponent implements OnInit {
@Input() ingredients:any;
@Output() ingredientAdded = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
onAddIngredient(event){
this.ingredientAdded.next(event);
}
}
