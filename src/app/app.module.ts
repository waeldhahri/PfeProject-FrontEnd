import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningAlertsComponent } from './warning-alerts/warning-alerts.component';
import {WarningAlertComponent} from "./Warning-alert/warning-alert.component";


@NgModule({
  declarations: [
    AppComponent,ServerComponent, ServersComponent, WarningAlertsComponent , WarningAlertComponent
  ],
  imports: [
    BrowserModule, FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
