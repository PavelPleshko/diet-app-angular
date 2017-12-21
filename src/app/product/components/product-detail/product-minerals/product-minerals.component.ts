import { Component, OnInit } from '@angular/core';
import {ProductDetailComponent} from '../product-detail.component';
import {Sort} from '@angular/material';


function compare(a,b,isAsc){
	return (a<b ? -1 : 1) * (isAsc ? 1: -1);
}

@Component({
  selector: 'app-product-minerals',
  templateUrl: './product-minerals.component.html',
  styleUrls: ['./product-minerals.component.scss']
})
export class ProductMineralsComponent implements OnInit {
productData;
sortedData;
activeHeader;
headers=[{name:'mineral',title:'Mineral'},
		 {name:'amount',title:'Amount'},
		 {name:'RDA',title:'% of daily norm'},
		 {name:'limit',title:'Limit?'}];

  constructor(private productDetail:ProductDetailComponent) { }

  ngOnInit() {
this.productData = this.productDetail.product;
this.sortedData= this.productData.minerals.slice(); //copy
console.log(this.productData); 
  }




  getClasses(odd){
  	return {'blue lighten-5': odd,
  			'red lighten-3': !odd}
  }

  sortData(sort:Sort){ //passes direction and name of the table header
  	this.activeHeader=sort.active;
  	console.log(this.activeHeader,sort.active)
  	const data = this.productData.minerals.slice();
  	if(!sort.active || sort.direction == ''){
  		this.sortedData = data;
  		return;
  	}
  	this.sortedData = data.sort((a,b)=>{
  		let isAsc = sort.direction == 'asc'; //ascending order
  		switch(sort.active){
  			case 'mineral': return compare(a.mineral,b.mineral,isAsc);
  			case 'amount':return compare(+a.amount,+b.amount,isAsc);
  			case 'RDA':return compare(+a.RDA,+b.RDA,isAsc);
  			case 'limit': return compare(+a.limit,+b.limit,isAsc);
  			default: return 0;
  		}
  	})
  }

  isActiveHeader(header){
  	return header.name === this.activeHeader;
  }
}
