import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // navigation
import { HttpClientModule } from '@angular/common/http';

// see google-maps README; can also use LoaderOptions
// import { Loader, LoaderOptions } from 'google-maps'

// this is in beta and doesn't seem to work.
// import { AgmCoreModule } from '@agm/core';

// root component
import { AppComponent } from './app.component';

// pipes
import { PipesPipe } from './pipes.pipe';

// sub-components
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { GeoRelativityComponent } from './geo-relativity/geo-relativity.component'; // probably gonna make this one a service
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesPipe,
    GeoRelativityComponent,
    ControlPanelComponent,
    SettingsComponent,
    HistoryComponent,
    HomeComponent,
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
        { path: 'settings', component: SettingsComponent },
        { path: 'history', component: HistoryComponent },
      ]),
    HttpClientModule,
  ],
  providers: [], // used for services! todo: add locator and spot-listen
  bootstrap: [AppComponent]
})
export class AppModule { }
