import { Component, OnInit } from '@angular/core';
import {ProductDetailComponent} from '../product-detail.component';
import {Sort} from '@angular/material';


function compare(a,b,isAsc){
	return (a<b ? -1 : 1) * (isAsc ? 1: -1);
}

@Component({
  selector: 'app-product-nutrients',
  templateUrl: './product-nutrients.component.html',
  styleUrls: ['./product-nutrients.component.scss']
})
export class ProductNutrientsComponent implements OnInit {
productData;
sortedData;
  constructor(private productDetail:ProductDetailComponent) { }

  ngOnInit() {
this.productData = this.productDetail.product;
this.sortedData= this.productData.nutrients.slice(); //copy
console.log(this.productData); 
  }




  getClasses(odd){
  	return {'blue lighten-5': odd,
  			'red lighten-3': !odd}
  }

  sortData(sort:Sort){ //passes direction and name of the table header
  	const data = this.productData.nutrients.slice();
  	if(!sort.active || sort.direction == ''){
  		this.sortedData = data;
  		return;
  	}
  	this.sortedData = data.sort((a,b)=>{
  		let isAsc = sort.direction == 'asc'; //ascending order
  		switch(sort.active){
  			case 'nutrient': return compare(a.nutrient,b.nutrient,isAsc);
  			case 'amount':return compare(+a.amount,+b.amount,isAsc);
  			case 'RDA':return compare(+a.RDA,+b.RDA,isAsc);
  			case 'limit': return compare(+a.limit,+b.limit,isAsc);
  			default: return 0;
  		}
  	})
  }
}
