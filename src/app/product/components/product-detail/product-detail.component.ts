import { Component, OnInit,Inject } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductModel} from '../../product.model';
import {ProductService} from '../../services/product.service';
import {MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
product:ProductModel;
p:any;
productTitle:string;
 tabItems; 
  constructor(private route:ActivatedRoute, private productService:ProductService,
    public dialogRef: MatDialogRef<ProductDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
   const productTitle = route.snapshot.params['title'];
  // this.product = this.productService.getProduct(productTitle)[0];
}
//['/',{outlets:{'main':['about']}}]
  ngOnInit() {
  	this.product = this.data.product;
  	this.tabItems = [
      {title: 'Nutrients', link: ['/',{outlets:{'modal':[`nutrients`]}}]},
      {title: 'Vitamins', link: ['/',{outlets:{'modal':['vitamins']}}]},
      {title: 'Minerals', link: ['/',{outlets:{'modal':['minerals']}}]},
      {title: 'Description', link: ['/',{outlets:{'modal':['description']}}]}
];
  }

  onCloseDialog():void{
  	this.dialogRef.close();
  }

}
