import { Component, OnInit,Input } from '@angular/core';
import {Meal} from '../../../services/meals.service';
@Component({
  selector: 'app-profile-meal-single',
  templateUrl: './profile-meal-single.component.html',
  styleUrls: ['./profile-meal-single.component.scss']
})
export class ProfileMealSingleComponent implements OnInit {
@Input() meal:Meal;
  constructor() { }

  ngOnInit() {
  	console.log(this.meal);
  }

}
