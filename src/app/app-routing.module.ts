import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonComponent } from './person/person.component';

const routes: Routes = [
	// { path: '', redirectTo: '/person', pathMatch: 'full' }
	{ path: '', component: PersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
  	routes
  	// { useHash: true }
  	// { enableTracing: true })
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
