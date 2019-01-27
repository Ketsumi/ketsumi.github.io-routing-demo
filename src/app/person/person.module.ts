import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person.component';
import { PersonListComponent } from './person-list.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PersonRoutingModule
  ],
  declarations: [PersonComponent, PersonListComponent]
})
export class PersonModule { }
