import { Injectable } from '@angular/core';
import {ProductModel} from '../product.model';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {contentHeaders} from '../../common/headers';
import {AuthHttpService} from '../../auth/services/auth-http.service';
import {Http,Response,Headers} from '@angular/http';
import {ReplaySubject} from 'rxjs/ReplaySubject';


@Injectable()
export class ProductService {
public products:ReplaySubject<ProductModel[]>=new ReplaySubject(1);
public product:Subject<ProductModel> = new BehaviorSubject<any>(null);
baseUrl="api/";

  constructor(private authHttpService:AuthHttpService,private http:Http) { 
  }


getAllProducts(category?){
	if(!category){
		return this.http.get(`${this.baseUrl}products`).map((res:Response)=>res.json())
		.subscribe((data)=>this.products.next(data));
	} else{
		return this.http.get(`${this.baseUrl}products`).map((res:Response)=>res.json().filter((product)=>{
			product.category == category;
		})).subscribe((data)=>this.products.next(data));
	}
 // return this.authHttpService.get('/api/products',{headers:contentHeaders})
 // 	.map((res:Response) =>res.json())
}


createProduct(data){
	let body = this.serialize(data);
	return this.authHttpService.post('/api/products/create',body,{headers:contentHeaders})
		.map((res:Response)=>res.json())
}

serialize(data){
	return JSON.stringify(data);
}

}






