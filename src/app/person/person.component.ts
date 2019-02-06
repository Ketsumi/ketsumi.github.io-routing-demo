import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.sass']
})
export class PersonComponent implements OnInit {
	public title: string;

  constructor() {
  	this.title = 'PersonComponent';
  }

  ngOnInit() {
  	console.log('PersonComponent loaded.');
  }

}
