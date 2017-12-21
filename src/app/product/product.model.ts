
import {NutrientModel} from './product-extra-models/nutrients.model';
import {VitaminModel} from './product-extra-models/vitamins.model';
import {MineralModel} from './product-extra-models/minerals.model';


export class ProductModel {
	id:number;
	title:string;
	category:string;
	imageUrl:string;
	thumbnailUrl:string;
	nutrients:NutrientModel[];
	vitamins:VitaminModel[];
	minerals:MineralModel[];

	constructor(
		id?:number,
	title?:string,
	category?:string,
	imageUrl?:string,
	thumbnailUrl?:string,
	nutrients?:NutrientModel[],
	vitamins?:VitaminModel[],
	minerals?:MineralModel[]
		){
	this.id = id;
	this.title = title;
	this.category = category;
	this.imageUrl=imageUrl;
	this.thumbnailUrl=thumbnailUrl;
	this.nutrients=nutrients;
	this.vitamins=vitamins;
	this.minerals=minerals;
	}
}