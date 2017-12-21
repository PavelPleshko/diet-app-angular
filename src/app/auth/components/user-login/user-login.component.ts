import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms'; 
import {Router,ActivatedRoute} from '@angular/router';
import {UserModel} from '../../user.model';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Response} from '@angular/http';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
userModel:UserModel;
loginForm:FormGroup;

submitted:boolean = false;

  constructor(public formBuilder: FormBuilder,public router:Router, private authService:AuthService) { }

  ngOnInit() {
  	//this.userModel = new UserModel("","","","");
  	this.activateRegForm();
  }


    activateRegForm(){
  	this.loginForm = this.formBuilder.group({
 'email':['',Validators.required],
 'password':['',Validators.required]
  	})
  }


  onSubmitForm(form:FormGroup){
this.submitted = true;
if(!form.valid) return;

this.authService.signin(form.value)
.subscribe((response:Response)=>{
	this.authService.setCurrentUser(response);
	console.log(response);
},
  (error)=>{
  	console.log(error);
  });
 //here service should pass the data to server which would save it
this.router.navigate(['/about']);
  }
}
