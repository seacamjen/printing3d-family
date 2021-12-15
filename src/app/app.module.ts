import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FutureProjectsComponent } from './components/future-projects/future-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    FutureProjectsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
