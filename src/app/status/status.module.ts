import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';
import { StatusCode404Component } from './status-code404.component';

@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule
  ],
  declarations: [StatusComponent, StatusCode404Component]
})
export class StatusModule { }
