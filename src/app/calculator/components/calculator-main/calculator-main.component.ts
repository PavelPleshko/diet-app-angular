import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator-main.component.html',
  styleUrls: ['./calculator-main.component.css']
})
export class CalculatorMainComponent implements OnInit {
resultCalories:any;
proteins:number;
carbs:number;
fats:number;

formCalc:FormGroup;
formSubmitted:boolean = false;

  constructor(private formBuilder:FormBuilder) { 
  	this.formCalc = this.formBuilder.group({
 'weight': ['',[Validators.required,Validators.min(40),Validators.max(200)]],
 'height':['',[Validators.required,Validators.min(140),Validators.max(220)]],
 'gender':['',Validators.required],
 'age':['',Validators.required]
});
}
  ngOnInit() {
  }


  
 onSubmitForm(form){
 	if(!form.valid) return;
 	this.formSubmitted = true;
 	console.log(form.value);
 	if(form.value.gender === 'female'){
 		this.resultCalories = Math.round(665.09 + (9.56 * form.value.weight) + (1.84 * form.value.height) - (4.67 * form.value.age));
 	} else{
 		this.resultCalories = Math.round(66.47+ (13.75 * form.value.weight) + (5.0 * form.value.height) - (6.75 * form.value.age));
 	}
 	
 }

 saveToProfile(){
 	if(!this.resultCalories) return;
 	let dailyNorm={calories:this.resultCalories,proteins:'',carbs:'',fats:''};
 	let serialized = JSON.stringify(dailyNorm);
 	window.localStorage.setItem('profile',serialized);

 }
}
