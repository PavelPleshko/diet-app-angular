import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {getUrl} from '../../functions/api.function';
import {Observable} from 'rxjs/Observable';
import {contentHeaders} from '../../common/headers';
import {ApiService} from '../../services/api.service';


@Injectable()
export class UserService {

  constructor(private http:Http) { }
registerUser(data):Observable<any>{
	const path ='/users/register-user';
	console.log(getUrl(path));
return this.http.post(path,data);
}


}
