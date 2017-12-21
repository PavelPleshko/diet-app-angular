import { Component, OnInit,ViewChild, Input,AfterViewInit,
 Output, EventEmitter, HostBinding, HostListener } from '@angular/core';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit,AfterViewInit {
@ViewChild('editableContentElement') editableContentElement;
editable = false;
editMode;
@Input() content;
@Input() showControls = true;
@Output() editSaved = new EventEmitter();
@Output() editableInput = new EventEmitter();
@Output() editModeTask = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	this.setEditableContent(this.content);
  }

  ngOnChanges(){
  	if(this.editableContentElement && this.content){
  		this.setEditableContent(this.content);
  	}
  }

  getEditableContent(){
  	return this.editableContentElement.nativeElement.textContent;
  }

  setEditableContent(content){
  	return this.editableContentElement.nativeElement.textContent = content;
  }

  @HostListener('click') focusEditableContent(){
  	if(this.editMode){
  		this.editableContentElement.nativeElement.contentEditable = true;
  		this.editableContentElement.nativeElement.focus();
  	}
  }

  onInput(){
  	this.editableInput.next(this.getEditableContent());
  }

  save(){
  	if(this.editableContentElement.nativeElement.contentEditable){
  		this.editableContentElement.nativeElement.contentEditable = false;
  	}
  	this.editSaved.next(this.getEditableContent());
  	this.setEditableContent(this.content);
  	this.toggleEditMode();
  }

  cancel(){
  	this.toggleEditMode();
  	if(this.editableContentElement.nativeElement.contentEditable){
  		this.editableContentElement.nativeElement.contentEditable = false;
  	}
  	this.setEditableContent(this.content);
  	this.editableInput.next(this.getEditableContent());
  }


  toggleEditMode(){
  	this.editMode = !this.editMode;
  }

}
