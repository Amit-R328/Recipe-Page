import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: 
  `<div class="header">
      <h1 class="mainTitle">Simple Omelette Recipe</h1>
   </div>`,
    styleUrls: ['./header.component.sass']
  })
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
