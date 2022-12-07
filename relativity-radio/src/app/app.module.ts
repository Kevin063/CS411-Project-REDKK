import { NgModule,Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GoogleMapsModule } from '@angular/google-maps'
import {HttpClientModule} from '@angular/common/http'; // importing the http module (for API requests)
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GeoRelativityComponent } from './geo-relativity/geo-relativity.component';
import { PipesPipe } from './pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GeoRelativityComponent,
    PipesPipe
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    AppRoutingModule
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // adding the thing in imports too!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
