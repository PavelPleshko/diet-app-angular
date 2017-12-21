import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import {ProductModel} from '../../product.model';
import {ProductService} from '../../services/product.service';
import { Validators, FormArray, FormGroup, FormControl, FormBuilder} from '@angular/forms'; 
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/services/auth.service';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions } from 'ngx-uploader';
import {Http,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
   options: UploaderOptions;
  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;

public product:ProductModel;
productForm:FormGroup;
submitted:boolean = false;
user = {};

  constructor(private productService:ProductService,private http:Http,private authService:AuthService,private formBuilder:FormBuilder,private router:Router) {
    this.files = []; // local uploading files array
    this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
    this.humanizeBytes = humanizeBytes;
     }

  ngOnInit() {
  	this.product = new ProductModel();
  	this.activateRegForm();
    this.authService.currentUser.subscribe((user)=>{
      this.user = user;
    })
  }


  activateRegForm(){
  	this.productForm = this.formBuilder.group({
 'title': ['',Validators.required],
 'category':['',Validators.required],
 'image':[''],
 'nutrients':this.formBuilder.group({
 	proteins:['',Validators.required],
 	carbs:['',Validators.required],
 	fats:['',Validators.required]
 }),
 'vitamins':this.initVitamins(),
 'minerals':this.formBuilder.group({
 	'Ca':['',Validators.required],
 	'Mg':['',Validators.required],
 	'Fe':['',Validators.required]
 }),
  	})
  }
  onSubmit(event,form:FormGroup){
  	console.log(form.value);
  	this.submitted = true;
  	if(!form.valid) return;
  	event.preventDefault();
var data = form.value;
data.user = this.user;
  	this.productService.createProduct(form.value)
  		.subscribe((product)=>{
  			this.productService.product.next(product);
  			this.router.navigate['/products'];
  		})
  }


  initVitamins(){
  	return this.formBuilder.group({
  		Vitamin_A:['',Validators.required],
  		'Vitamin_B1':['',Validators.required],
  		'Vitamin_B2':['',Validators.required],
  		'Vitamin_B3':['',Validators.required],
  		'Vitamin_B5':['',Validators.required],
  		'Vitamin_B6':['',Validators.required],
  		'Vitamin_B7':['',Validators.required],
  		'Vitamin_B9':['',Validators.required],
  		'Vitamin_B12':['',Validators.required],
  		'Vitamin_C':['',Validators.required],
  		'Vitamin_D':['',Validators.required],
  		'Vitamin_E':['',Validators.required],
  		'Vitamin_K':['',Validators.required],
  	})
  }

 onUploadOutput(output: UploadOutput): void {
    if (output.type === 'allAddedToQueue') { // when all files added in queue
    } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') { // add file to array when added
      this.files.push(output.file);
    } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
      // update current data in files array for uploading file
      const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
      this.files[index] = output.file;
    } else if (output.type === 'removed') {
      // remove file from array when removed
      this.files = this.files.filter((file: UploadFile) => file !== output.file);
    } else if (output.type === 'dragOver') {
      this.dragOver = true;
    } else if (output.type === 'dragOut') {
      this.dragOver = false;
    } else if (output.type === 'drop') {
      this.dragOver = false;
    }
  }

  startUpload(): void {
    const event: UploadInput = {
      type: 'uploadAll',
      url: '/file/upload',
      method: 'POST',
      data: { image: 'image' },
      headers:{'enctype':'multipart/form-data'}
    };

    this.uploadInput.emit(event);
    console.log(this.uploadInput);
  }

  cancelUpload(id: string): void {
    this.uploadInput.emit({ type: 'cancel', id: id });
  }

  removeFile(id: string): void {
    this.uploadInput.emit({ type: 'remove', id: id });
  }

  removeAllFiles(): void {
    this.uploadInput.emit({ type: 'removeAll' });
  }

fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('image', file,file.name);

        console.log(formData,file);
        let headers = new Headers();
        /** No need to include Content-Type in Angular 4 */
       // headers.append('Content-Type', 'undefined');
        headers.append('Accept', 'application/json');
        let options = new RequestOptions({ headers: headers });
        this.http.post('/file/upload', formData,options)
            .map(res => res.json())
            .catch(error => Observable.throw(error))
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}
}
