
import {Directive, HostListener, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[draggable]',
  host: {
    class: 'draggable',
    // Additionally to the class we also need to set the HTML attribute draggable to enable draggable browser behaviour
    draggable: 'true'
  }
})
export class Draggable {
@Input() draggableData;
@Input() draggableType;

@HostBinding('class.draggable--dragging') dragging;

@HostListener('dragstart',['$event'])
onDragStart(event){
  console.log(this.draggableData);
	event.dataTransfer.effectAllowed="move";
	event.dataTransfer.setData(
		'application/json',
		JSON.stringify(this.draggableData));

	event.dataTransfer.setData(`draggable-type:${this.draggableType}`,'');
	this.dragging = true;
}

@HostListener('dragend')
onDragEnd() {
  this.dragging = false;
}




}