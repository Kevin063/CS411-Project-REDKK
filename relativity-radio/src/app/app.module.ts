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
import { SettingsComponent } from './settings/settings.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesPipe,
    ControlPanelComponent,
    SettingsComponent,
    HistoryComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    // AgmCoreModule.forRoot({
    //   apiKey: '' // Insert API Key here!
    // }),
    // Loader,
    // LoaderOptions,
    RouterModule.forRoot([
        { path: '', component: HomeComponent },
        { path: 'settings', component: SettingsComponent },
        { path: 'history', component: HistoryComponent },
        { path: 'panel', component: ControlPanelComponent },
        { path: 'login', component: LoginComponent },
      ]),
      ]),
    HttpClientModule,
  ],
  providers: [], // used for services! todo: add locator and spot-listen
  bootstrap: [AppComponent]
})
export class AppModule { }
