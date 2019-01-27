import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonModule } from './person/person.module';
import { StatusModule } from './status/status.module';
import { PetModule } from './pet/pet.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonModule,
    StatusModule,
    PetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
