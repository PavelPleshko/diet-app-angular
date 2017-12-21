import { Injectable } from '@angular/core';
import {contentHeaders} from '../common/headers';
import {Http,Response,Headers} from '@angular/http';
import {ReplaySubject} from 'rxjs/ReplaySubject';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class DishMakerService {
baseUrl="api/";
addedItem:Subject<any> = new Subject();
$addedItem = this.addedItem.asObservable();
currentDish = [];
currentDishSubject:Subject<any> = new Subject();
currentDish$ = this.currentDishSubject.asObservable();
currentLayer:number=1;
layersItemNumber:number = 3;
addToExisting:boolean=true;
  constructor(private http:Http) { }


  getIngredients(){
		return this.http.get(`${this.baseUrl}ingredients`).map((res:Response)=>res.json())
  }

  addIngredient(obj){
  	var id = obj.item.id;
  	var ingrID = 'ingr_'+id;
  	console.log(this.currentDish)
  	if(typeof this.currentDish[ingrID] !== 'undefined'){
  		var count = this.currentDish[ingrID].count;
  		if(count<this.layersItemNumber){
  			this.changeIngredientCounterNumber(id,count);
  			this.currentDishSubject.next(this.currentDish);
  			//cache state this.cacheCurrentProductState();
  		}else{
  			this.addToExisting=false;
  			return false;
  		}
  	}else{
  		this.currentDish[ingrID]={
  			count:1,
  			index:id,
  			item:obj.item,
  			layers:[this.currentLayer]
  		};

  		this.currentDishSubject.next(this.currentDish);
  		this.addToExisting=true;
  		this.addedItem.next(this.currentDish[ingrID]);
  		return true;
  	}
  	

  }


clearCurrentDish(){
  this.currentDishSubject.next([]);
}


  changeIngredientCounterNumber(id,count){
  	 var ingrID = 'ingr_'+id;
  	this.currentDish[ingrID].layers[count]=this.currentLayer;
  	this.currentDish[ingrID].count++;
  	this.addedItem.next(this.currentDish[ingrID]);
  }

}
