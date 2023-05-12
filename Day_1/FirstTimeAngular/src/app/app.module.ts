import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { myAppComponent } from './myComponent/myComp';

@NgModule({
  declarations: [
    AppComponent,
    myAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [myAppComponent]
})
export class AppModule { }
