import { Component, OnInit } from '@angular/core';
import { Validators, FormArray, FormGroup, FormControl, FormBuilder } from '@angular/forms'; 
import {Router,ActivatedRoute} from '@angular/router';
import {UserModel} from '../../user.model';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {PasswordValidation} from '../../../services/validators/match-password-validator';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
userModel:UserModel;
userForm:FormGroup;
authType:string='';

submitted:boolean = false;
confiredPassword:boolean = false;

  constructor(public formBuilder: FormBuilder,public router:Router, private userService:UserService) { }

  ngOnInit() {
    
  	this.userModel = new UserModel();
  	this.activateRegForm();
  }

  activateRegForm(){
  	this.userForm = this.formBuilder.group({
 'firstName': [this.userModel.firstName,Validators.required],
 'lastName':[this.userModel.lastName,Validators.required],
 'email':[this.userModel.email,Validators.required],
 'password':[this.userModel.password,Validators.required],
 'confirmPassword':['',Validators.required]
  	},{
  		validator:PasswordValidation.MatchPassword
  	})
  }


  onSubmitForm(form:FormGroup){
this.submitted = true;
if(!form.valid) return;

this.userService.registerUser(form.value)
.map(res=>res.json())
.subscribe(response=>console.log(response),
  error=>console.log(error));
 //here service should pass the data to server which would save it
this.router.navigate(['/about']);
  }


  mapFormValues(form){
  	this.userModel.firstName = form.controls['firstName'].value;
  	this.userModel.lastName = form.controls['lastName'].value;
  	this.userModel.email = form.controls['email'].value;
  	this.userModel.password = form.controls['password'].value;

  }



}
