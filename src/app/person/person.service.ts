import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Person } from './person';
import { PERSONS } from './person.mock';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
	private observable: Observable<Person[]>;

  constructor() {
  	this.observable = of(PERSONS);
  }

  public get(): Observable<Person[]> {
  	return this.observable;
  }

}
