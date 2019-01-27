import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: '/person', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
  	routes
  	// { enableTracing: true })
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
