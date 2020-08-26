import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from '@angular/forms';
import { IgxInputGroupModule } from "igniteui-angular";

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, IgxInputGroupModule, BrowserAnimationsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
