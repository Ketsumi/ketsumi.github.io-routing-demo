import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-code404',
  templateUrl: './status-code404.component.html',
  styleUrls: ['./status-code404.component.sass']
})
export class StatusCode404Component implements OnInit {
	private message: string;

  constructor() {
  	this.message = '404: Page Not Found';
  }

  ngOnInit() {
  }

}
