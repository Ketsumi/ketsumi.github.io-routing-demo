import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.sass']
})
export class PersonListComponent implements OnInit {
	public title: string;
  public persons: Person[];

  constructor(private personService: PersonService) {
  	this.title = 'PersonListComponent';
  }

  ngOnInit() {
  	console.log('PersonListComponent loaded.');

    this.personService.get().subscribe(data => {
      console.log(data);
      this.persons = data;
    });
  }

}
