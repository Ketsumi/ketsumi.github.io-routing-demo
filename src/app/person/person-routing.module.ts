import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list.component';

const routes: Routes = [{
	path: 'person',
	component: PersonComponent,
	children: [{
		path: 'list',
		component: PersonListComponent,
		outlet: 'aside'
	}]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
