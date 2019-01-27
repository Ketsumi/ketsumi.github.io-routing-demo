import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './pet.component';
import { PetListComponent } from './pet-list.component';

@NgModule({
  imports: [
    CommonModule,
    PetRoutingModule
  ],
  declarations: [PetComponent, PetListComponent]
})
export class PetModule { }
