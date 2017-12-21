import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../../auth/services/auth.service';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
currentUser = {role:null,name:null};
loggedIn:boolean = false;
loggedInAs:string;
  constructor(private authService:AuthService) { }

  ngOnInit() {
  	// this.authService.currentUser.subscribe((user)=>{
  	// 	if(user){
  	// 		this.loggedIn = true;
  	// 	};

  	// 	if(user.roles.indexOf('admin') !== -1){
  	// 		this.currentUser.role = 'admin';
  	// 		this.loggedInAs = 'admin'
  	// 	}else {
  	// 		this.currentUser.role = 'user';
  	// 		this.loggedInAs = 'user';
  	// 	}
  	// 	this.currentUser.name = user.firstName;
  	// })
  }

}
