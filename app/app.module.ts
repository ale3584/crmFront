import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import {ProfileComponent} from './profile/profile.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent],
  bootstrap:    [ AppComponent, HomeComponent, ProfileComponent]
})
export class AppModule { }
