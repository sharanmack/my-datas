import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebappComponent } from './webapp/webapp.component';
import { ImagecompComponent } from './imagecomp/imagecomp.component';

@NgModule({
  declarations: [
    AppComponent,
    WebappComponent,
    ImagecompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
