import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {contentHeaders} from '../../common/headers';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
public currentUser:Subject<any>;

  constructor(private http:Http,private router:Router) {
 // this.initSession();
}


  signin(user:any){
  	let body = this.serialize(user);
  	let basic = btoa(`${user.email} :${user.password}`);
  	let headers = new Headers(contentHeaders);
  	headers.append('Authorization',`Basic ${basic}`);

  	return this.http
  		.post('/auth/signin',body,{headers:headers})
  		.map((res:Response)=>res.json());
  }

  register(user:any){
  	let body = this.serialize(user);

  	return this.http
  		.post('/auth/register',body,{headers:contentHeaders})
  		.map((res:Response)=>{
  			res.json();
  		})
  }

  setCurrentUser(user:any){
  	this.currentUser.next(user);
  }

  initSession(){
  	var user = this.deserialize(localStorage.getItem('currentUser'));
//if its null then we init subject with null
  	this.currentUser = new BehaviorSubject<Response>(user);
  	//then we subscribe to changes in the subject.if user comes in we persist it in the localstorage 
  	this.currentUser.subscribe((user)=>{
  		if(user){
  			localStorage.setItem('currentUser',this.serialize(user));
  			localStorage.setItem('token', user.token || '');
  		}
  	})
  }

  serialize(data) {
    return JSON.stringify(data);
  }


  deserialize(str) {
    try {
      return JSON.parse(str);
    } catch(err) {
      console.error(err);
      return null;
    }
  }
}
