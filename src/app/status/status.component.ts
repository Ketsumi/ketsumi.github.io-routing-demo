import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.sass']
})
export class StatusComponent implements OnInit {
	public title: string;

  constructor() {
  	this.title = 'StatusComponent';
  }

  ngOnInit() {
  }

}
