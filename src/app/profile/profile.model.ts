import {Injectable} from '@angular/core';
import {Ration} from '../services/meals.service';

@Injectable()
export class ProfileModel {
	public username:string;
	public goal:string;
	public profileImgUrl:string;
	public bio:string;
	public rations?:Ration[];		
}