import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebappComponent } from './webapp/webapp.component';
import { ImagecompComponent } from './imagecomp/imagecomp.component';
import { MyDataComponent } from './my-data/my-data.component';

@NgModule({
  declarations: [
    AppComponent,
    WebappComponent,
    ImagecompComponent,
    MyDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
