import { Component,OnInit} from '@angular/core';
import {Router,NavigationEnd,ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
navItems=[{title:'About',routerLink:"about"},
{title:'Register',routerLink:"user-registration"},
{title:'Login',routerLink:"user-login"}]

constructor(private router:Router,private route:ActivatedRoute,
    private titleService:Title){}
ngOnInit(){
	 var e =  this.router.events.filter((event)=> event instanceof NavigationEnd)
   .map(()=>this.route)
   .map((route)=>{
   	while(route.firstChild) route = route.firstChild
   		return route
   }).filter((route)=>route.outlet === 'primary')

   .mergeMap((route)=>route.data)
   .subscribe((event)=> {
   	if(event.title) {this.titleService.setTitle(event['title'])}
   	else{
   		this.titleService.setTitle('AnemiaApp')
   	}});
}
}
