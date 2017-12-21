import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'toFixed'})

export class ToFixedPipe implements PipeTransform {
	transform(value:number,num:number):any{
		if(!num){
			return value;
		}else{
			
				return +value.toFixed(num);
			}
			
		
}
}
