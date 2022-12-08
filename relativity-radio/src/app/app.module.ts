// There was no package GoogleMapsModule in google-maps. -Reid

import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // navigation
import { HttpClientModule } from '@angular/common/http'; // importing the http module (for API requests)


// see google-maps README; can also use LoaderOptions
// import { Loader, LoaderOptions } from 'google-maps'

// this is in beta and doesn't seem to work.
// import { AgmCoreModule } from '@agm/core';

// root component
import { AppComponent } from './app.component';

// pipes
import { PipesPipe } from './pipes.pipe';

// components
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { GeoRelativityComponent } from './geo-relativity/geo-relativity.component';
import { TitleBarComponent } from './title-bar/title-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    GeoRelativityComponent,
    ControlPanelComponent,
    PipesPipe,
    TitleBarComponent,
  ],
  imports: [
    BrowserModule,
    // AgmCoreModule.forRoot({
    //   apiKey: '' // Insert API Key here!
    // }),
    // Loader,
    // LoaderOptions,
    RouterModule.forRoot([
        { path: '', component: ControlPanelComponent },
        // { path: 'products/:productId', component: ProductDetailsComponent },
      ]),
    HttpClientModule,
  ],
  providers: [], // used for services!
  bootstrap: [AppComponent]
})
export class AppModule { }
