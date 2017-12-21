import { Injectable } from '@angular/core';
import {ProductModel} from '../product/product.model';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';



@Injectable()
export class ProductsService{
favoriteProducts:BehaviorSubject<ProductModel[]>=new BehaviorSubject([]);
favProd$ = this.favoriteProducts.asObservable();
favProdArray=[];

constructor(){ 
}

addToFavorites(product:ProductModel){
this.favProdArray.push(product);
this.favoriteProducts.next(this.favProdArray);
}

removeFromFavorites(product:ProductModel){
  let productIndex = this.favProdArray.findIndex((productToRemove:ProductModel)=>{
    return productToRemove.title == product.title;
  })
  if(productIndex>=0){
    this.favProdArray.splice(productIndex,1);
    this.favoriteProducts.next(this.favProdArray);
  }
}
}

