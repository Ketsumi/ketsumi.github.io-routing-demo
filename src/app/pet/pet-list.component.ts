import { Component, OnInit } from '@angular/core';

import { Pet } from './pet';
import { PetService } from './pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.sass']
})
export class PetListComponent implements OnInit {
	public title: string;
  public pets: Pet[];

  constructor(private petService: PetService) {
  	this.title = 'PetListComponent';
  }

  ngOnInit() {
  	console.log('PetListComponent loaded.');

    this.petService.get().subscribe(data => {
      console.log(data);
      this.pets = data;
    });
  }

}
