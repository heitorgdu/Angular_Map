import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CapturePoiComponent } from './capture-poi/capture-poi.component';

@NgModule({
  declarations: [
    AppComponent,
    CapturePoiComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
