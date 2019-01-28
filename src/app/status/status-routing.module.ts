import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusComponent } from './status.component';
import { StatusCode404Component } from './status-code404.component';

const routes: Routes = [{
	path: 'status',
	component: StatusComponent,
	children: [{
		path: '404',
		component: StatusCode404Component
	}]
}, {
	path: '**',
	redirectTo: '/status/404',
	pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
