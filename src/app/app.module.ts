import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TrayShareComponent } from './shared/tray-share/tray-share.component';

@NgModule({
  declarations: [
    AppComponent,
    TrayShareComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
