import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/product.service';
import {ProductModel} from '../../product.model';
import {trigger, state, style, transition, animate} from '@angular/animations';
 



@Component({
  selector: 'app-favorite-products-list',
  templateUrl: './favorite-products-list.component.html',
  styleUrls: ['./favorite-products-list.component.scss'],
})
export class FavoriteProductsListComponent implements OnInit {
	

  constructor(private productService:ProductsService) { }
favorites:ProductModel[];
  ngOnInit() {
  	this.productService.favProd$.subscribe((data)=>{
  		this.favorites = data;
  	})
  }

  removeFav(product:ProductModel){
  	this.productService.removeFromFavorites(product);
  }

}
