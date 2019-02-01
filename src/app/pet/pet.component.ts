import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.sass']
})
export class PetComponent implements OnInit {
	private title: string;

  constructor() {
  	this.title = 'PetComponent';
  }

  ngOnInit() {
  	console.log('PetComponent loaded.');
  }

}
