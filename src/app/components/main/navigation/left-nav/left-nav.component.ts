import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
sidenavWidth = 4;
sideNavItems=[
{title:'My profile',link:'',iconMat:'face',iconMaterialize:'',subitems:[
{title:'View profile',link:'/profile'},
{title:'Edit profile',link:''},
]},
{title:'My diary',link:'',iconMat:'content_paste',iconMaterialize:'',subitems:[
{title:'History',link:''},
{title:'Favorite food',link:'/products/favorites'}
]},
{title:'Products',link:'',iconMat:'restaurant_menu',iconMaterialize:'',subitems:[
{title:'List of products',link:'/products/list'},
{title:'Create your dish',link:'/dish-maker'}
  ]},
{title:'Check yourself',link:'',iconMat:'done_all',iconMaterialize:'',subitems:[
{title:'Body mass index',link:''},
{title:'Quiz',link:''}]},
{title:'My meals',link:'/meals',iconMat:'restaurant',iconMaterialize:'',subitems:[
{title:'Check ration',link:'/ration'},
{title:'Current meal',link:'/meals'},
{title:'Meal-builder',link:'/mealbuilder'}]},
{title:'Articles',link:'',iconMat:'storage',iconMaterialize:'',subitems:[]},
]
  constructor(private router : Router) { }

  ngOnInit() {
  }

increase(){
    this.sidenavWidth = 15;
  }
  decrease(){
    this.sidenavWidth = 4;
}
}
