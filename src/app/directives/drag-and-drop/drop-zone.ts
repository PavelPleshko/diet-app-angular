import {Directive, HostListener, Input, HostBinding, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[draggableDropZone]'
})
export class DraggableDropZone {
  // With this input we tell the draggable drop zone in what types we're interessted
  @Input() dropAcceptType;
  // If something was dropped onto the drop zone, we should emit an event
  @Output() dropDraggable = new EventEmitter();
  // The directive is adding a class to the host element if a valid draggable is moved over our drop zone
@HostBinding('class.draggable--over') over;
dragEnterCount:number;

constructor(){
this.dragEnterCount = 0;
}

typeIsAccepted(event){
	const draggableType = event.dataTransfer.types;

	let draggableTypeA = draggableType.find((key)=> key.indexOf('draggable-type') === 0)
   console.log(draggableTypeA,draggableType);
	return draggableTypeA && draggableTypeA.split(':')[1] === this.dropAcceptType;
}

@HostListener('dragenter',['$event'])
onDragEnter(event){
	if(this.typeIsAccepted(event)){
    console.log('accepted',event);
		this.over = true;
		this.dragEnterCount++;
	}
}

@HostListener('dragleave', ['$event'])
onDragLeave(event) {
  // Using dragEnterCount, we determine if the dragleave event is 
  // because of child elements or because the draggable was moved 
  // outside the drop zone
  if (this.typeIsAccepted(event) && --this.dragEnterCount === 0) {
    this.over = false;
  }
}

@HostListener('dragover', ['$event'])
onDragOver(event) {
  // Only handle event if the draggable is accepted by our drop 
  // zone
  if (this.typeIsAccepted(event)) {
    // Prevent any default drag action of the browser and set the 
    // dropEffect of the dataTransfer object
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }
}
// This event will be captured if a draggable element is dropped 
// onto our drop zone
@HostListener('drop', ['$event'])
onDrop(event) {
  // Only handle event if the draggable is accepted by our drop 
  // zone
  if (this.typeIsAccepted(event)) {
    // First obtain the data object that comes with the drop event
    const data = JSON.parse(
      event.dataTransfer.getData('application/json')
    );
    // After successful drop, we can reset our state and emit an 
    // event with the data
    this.over = false;
    this.dragEnterCount = 0;
    this.dropDraggable.next(data);
  }
}
}