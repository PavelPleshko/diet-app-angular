import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-meal-element-single',
  templateUrl: './meal-element-single.component.html',
  styleUrls: ['./meal-element-single.component.scss']
})
export class MealElementSingleComponent implements OnInit {
@Input() item;

  constructor() { }

  ngOnInit() {
  	console.log(this.item)
  }

}
