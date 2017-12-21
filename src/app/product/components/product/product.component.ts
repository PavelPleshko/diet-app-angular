import { Component,Input, OnInit,Output,EventEmitter } from '@angular/core';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import {ProductDetailComponent} from '../product-detail/product-detail.component';
import {ProductsService} from '../../../services/product.service';
import {ProductModel} from '../../product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	@Input() product:ProductModel;
  @Output() addProd = new EventEmitter();
  _isFavorited:boolean;
  get isFavorited(){
    if(this._isFavorited){
      return 'favorite'
    }
    return 'favorite_border';
  }

  constructor(public dialog: MatDialog,private productService:ProductsService) { }

  openDialog():void{
  	let dialogRef=this.dialog.open(ProductDetailComponent,{
  		width:'600px',
  		height:'600px',
  		data:{product:this.product}
  	});
  	dialogRef.afterClosed().subscribe(result=>{
  		console.log(result);
  	})
  }
  ngOnInit() {
    this.checkFavorite();
  }

  addProduct(product:ProductModel){
    this.addProd.next(product);
  }

  favoriteOrUnfavoriteProduct(product:ProductModel){
    if(!this._isFavorited){
        this.productService.addToFavorites(product);
      }else{
        this.productService.removeFromFavorites(product);
      }
  
    this.checkFavorite();
  }

  checkFavorite(){
    this._isFavorited=false;
    this.productService.favProd$.subscribe((data)=>{
      let favProduct = data.find((product:ProductModel)=>{
        return this.product.title == product.title;
      })
      if(favProduct){
        this._isFavorited=true;
      }
    })
  }

}
