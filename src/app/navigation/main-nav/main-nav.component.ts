import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
@Input() items;
  constructor() { }

  ngOnInit() {
  }

}
