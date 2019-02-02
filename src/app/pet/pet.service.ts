import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Pet } from './pet';
import { PETS } from './pet.mock';

@Injectable({
  providedIn: 'root'
})
export class PetService {
	private observable: Observable<Pet[]>;

  constructor() {
  	this.observable = of(PETS);
  }

  public get(): Observable<Pet[]> {
  	return this.observable;
  }

}
