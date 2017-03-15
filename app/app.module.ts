import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';

import {InputTextModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';


import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports:      [
    BrowserModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWgqJLEjfdPGkUk9ynxbVc45I6QVgPN08'
    })],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
