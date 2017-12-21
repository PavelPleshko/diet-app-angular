import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {ProductModel} from '../../product.model';

import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import {MealsService} from '../../../services/meals.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products:ProductModel[];
productTitleFilter:FormControl= new FormControl();
filterCriteria:string;

  constructor(private productService:ProductService,private mealsService:MealsService) {
  	this.productTitleFilter.valueChanges
  		.debounceTime(100)
  		.subscribe(
  			value => this.filterCriteria = value,
  	 		error => console.error(error)); }

  ngOnInit() {
    this.productService.getAllProducts();
    this.productService.products.subscribe((products)=>this.products = products);
  }

  onAddProduct(product){
    console.log('Added ',product);
    this.mealsService.addProduct(product);
  }
}
