import {Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'time'})

export class TimePipe implements PipeTransform{
	transform(value){
		let months = ['January','February','March','April','May','June','July','August','September','October','November','December']

		if(!value) return '';
		if(!isNaN(value)){
			var dateToProcess = new Date(value);
			var hours = dateToProcess.getHours();
			var minutes = dateToProcess.getMinutes();

			return dateToProcess.getDate() +', ' + months[dateToProcess.getMonth()] + ' '+
			 ("0" + hours).substr(-2) + ':' +
				  ("0" + minutes).substr(-2);
		}
		return;
	}
}
