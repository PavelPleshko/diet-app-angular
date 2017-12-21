import { Injectable } from '@angular/core';
import { Http, Response, Headers, BaseRequestOptions, Request, RequestOptions, RequestOptionsArgs, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class AuthHttpService {
public unauthorized:Subject<Response>;

  constructor(private http:Http) {
  this.unauthorized = new BehaviorSubject<Response>(null);
   }

  request(requestArgs:RequestOptionsArgs,additionalArgs?:RequestOptionsArgs){
  	let opts = new RequestOptions(requestArgs);

  	if(additionalArgs){
  		opts = opts.merge(additionalArgs);
  	}
  	let req:Request = new Request(opts);

  	 if(!req.headers){
  	 	req.headers = new Headers();
  	 }

  	return this.http.request(req).catch((err:any)=>{
  		if(err.status === 401){
  			this.unauthorized.next(err);
  		}
  		return Observable.throw(err);
  	})
  }

  public get(url:string,opts?:RequestOptionsArgs){
  	return this.request({url:url,method:RequestMethod.Get},opts);
  }

  public post(url: string, body?: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Post, body: body}, opts);
  }

  public put(url: string, body?: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Put, body: body}, opts);
  }

  public delete(url: string, body?: string, opts?: RequestOptionsArgs) {
    return this.request({ url: url, method: RequestMethod.Delete, body: body}, opts);
}

}
