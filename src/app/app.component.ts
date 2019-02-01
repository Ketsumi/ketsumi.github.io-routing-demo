import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  private title: string;
  private routes: any[];

  constructor() {
  	this.title = 'RoutingDemo';
  	this.routes = [{
  		path: '/person',
  		name: 'Person'
  	}, {
  		path: '/pet',
  		name: 'Pet'
  	}];

  }
}
