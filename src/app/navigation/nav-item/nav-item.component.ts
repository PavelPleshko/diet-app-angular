import { Component, OnInit,Input } from '@angular/core';
import {RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
@Input() item;
  constructor() { }

  ngOnInit() {
  }

}
