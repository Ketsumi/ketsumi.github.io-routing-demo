import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusModule } from './status/status.module';
import { PersonModule } from './person/person.module';
import { PetModule } from './pet/pet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule,
    PetModule,
    StatusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
