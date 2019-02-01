import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.sass']
})
export class PetListComponent implements OnInit {
	private title: string;

  constructor() {
  	this.title = 'PetListComponent';
  }

  ngOnInit() {
  	console.log('PetListComponent loaded.');
  }

}
