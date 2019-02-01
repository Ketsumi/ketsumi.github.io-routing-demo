import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetComponent } from './pet.component';
import { PetListComponent } from './pet-list.component';

const routes: Routes = [{
	path: 'pet',
	component: PetComponent,
	children: [{
		path: 'list',
		component: PetListComponent,
		outlet: 'aside'
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
