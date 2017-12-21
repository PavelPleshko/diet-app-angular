import { Component, OnInit,OnDestroy } from '@angular/core';
import {DishMakerService} from '../../services/dish-maker.service';

export function getStyles(dom_element,property){
var propValue = getComputedStyle(dom_element)[property];
	return +propValue.substr(0,propValue.length - 2);
}
export function getElement(dom_element_id){
	return document.getElementById(dom_element_id);
}

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.scss']
})
export class WorkareaComponent implements OnInit,OnDestroy {
dishItems = [];
addedItem;
imgCounter:number;
allowPlacing:boolean;
partIndex:number;
workspace;
workspaceProperties;
arrayOfCoords=[];
ingredients;
subscriptions = [];
  constructor(private dishMaker:DishMakerService) {
  	
  
   }

  ngOnInit() {

    this.workspace = getElement('workspace');
      this.workspaceProperties = {
      width: getStyles(this.workspace, 'width')-80,
      height: getStyles(this.workspace, 'height')-100
    };

  	let ingredients = this.dishMaker.getIngredients().subscribe(data=>{
  		this.ingredients = data;
  	})
    this.subscriptions.push(ingredients);

  	let currentDish = this.dishMaker.currentDish$.subscribe((items)=>{
  		let unpacked = Object.entries(items);
  		let len = unpacked.length;
  		for(let i=0;i<len;i++){
  			this.dishItems[i] = unpacked[i][1];
  		}
  	})
    this.subscriptions.push(currentDish);

  	let item = this.dishMaker.addedItem.subscribe((item)=>{
  			this.addedItem = item;
  			if(this.dishMaker.addToExisting){
  			this.createIngredientLayer(this.addedItem);
  			 this.dishMaker.currentLayer++;
  		}
  		})
  		this.subscriptions.push(item);
  }


	createIngredientLayer(item){
		let layer = document.createElement('div');
		let maxItemsNumber =10;
		this.imgCounter = 0;
	    this.allowPlacing = true;
	    layer.style.zIndex = this.dishMaker.currentLayer.toString();
	   
	    for (this.partIndex = 0; this.partIndex < maxItemsNumber; this.partIndex++) {
    	var position = this.getRandomPosition();
    	 if(this.checkSettingPossibility(position)){
      this.partIndex--;
    } else {
      if(this.itemsFarEnough(position) === false) {
        this.partIndex--;
      } else {
        this.setLayerPart(item,position,layer);
      }
    }
     this.arrayOfCoords = [];
        layer.classList.add('emerge');
  this.workspace.appendChild(layer);
  layer.style.display="block";  	
}

	    
	}

	getRandomPosition(){
		return {
			x:Math.floor(Math.random()*this.workspaceProperties.width)+1,
			y:Math.floor(Math.random()*this.workspaceProperties.height)+1,
			angle:Math.random()*359
		}
	}

	checkSettingPossibility(position){
var workspaceCenter = {
    x:this.workspaceProperties.width / 2-20,
    y:this.workspaceProperties.height / 2-20 
  };
  var pow = {
    x:Math.pow((position.x - workspaceCenter.x),2),
    y:Math.pow((position.y - workspaceCenter.y),2)
  };
  var dividedWorkspaceHeight = this.workspaceProperties.height / 2;
  return pow.x + pow.y > Math.pow(dividedWorkspaceHeight - Math.sqrt(1800),2);
	}

	itemsFarEnough(position){
		 var coordsArray = this.arrayOfCoords;
  for(var coordIdx=0;coordIdx<coordsArray.length;coordIdx++){
    var element = coordsArray[coordIdx];
    var pow = {
      x:Math.pow((element.x-position.x),2),
      y:Math.pow((element.y - position.y),2)
    };
    if(pow.x + pow.y <=1800){
      return false;
    }
  }
  return true;
	}

	setLayerPart(item,position,layer){
var img = document.createElement('img');
  var ingr = this.findIngredient(item.index);
  img.src = '/assets/images/ingredients/' + ingr.title + '/'+(this.imgCounter++ % 1)+'.png';
  img.style.top = position.y + 'px';
  img.style.left = position.x + 'px';
  img.style.position = 'absolute';
  img.style.width = img.style.height = 52 + 'px';
  img.style.transform = 'rotate('+position.angle+'deg)';
  layer.style.display="none";
   
  layer.appendChild(img);
 
  this.arrayOfCoords[this.partIndex] = {
    x:position.x,
    y:position.y,
    id:this.partIndex
  };
	}

	findIngredient(id){
		return this.ingredients.find((item)=>{
			return item.id == id;
		})
	}
resetDish(){
this.workspace.parentElement.removeChild(this.workspace);
this.workspace = document.createElement('div');
this.workspace.classList.add('virtual-workspace');
this.workspace.setAttribute('id','workspace');

let mainDiv = document.getElementById('main-area');
mainDiv.appendChild(this.workspace);
this.dishItems=[];
this.dishMaker.clearCurrentDish();

  
}
  ngOnDestroy(){


    this.subscriptions.forEach((subscription)=>{
      subscription.unsubscribe();
    })
  }
}
