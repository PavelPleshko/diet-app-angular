import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Toast} from '../../../ui/toast/toast';
import {fadeInSlideOutAnimation} from '../../../animations/animations';
@Component({
  selector: 'app-favorite-product-single',
  templateUrl: './favorite-product-single.component.html',
  styleUrls: ['./favorite-product-single.component.scss'],
   animations:[fadeInSlideOutAnimation],
    host: { '[@fadeInSlideOutAnimation]': ''}
})
export class FavoriteProductSingleComponent implements OnInit {
@Input() favorite;
@Output() onFavRemove = new EventEmitter;


  constructor() { }

  ngOnInit() {
  
  }
onRemove(product){
	this.onFavRemove.next(product);
	var toast = new Toast('Removed',1000);
}
}
