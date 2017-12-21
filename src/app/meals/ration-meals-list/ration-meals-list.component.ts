import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ration-meals-list',
  templateUrl: './ration-meals-list.component.html',
  styleUrls: ['./ration-meals-list.component.scss']
})
export class RationMealsListComponent implements OnInit {
@Input() meals;
@Output() activeMealChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }


onActiveMealChange(meal){
this.activeMealChange.next(meal);
}
}
