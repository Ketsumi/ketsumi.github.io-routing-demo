import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.sass']
})
export class PersonListComponent implements OnInit {
	private title: string;

  constructor() {
  	this.title = 'PersonListComponent';
  }

  ngOnInit() {
  	console.log('PersonListComponent loaded.');
  }

}
