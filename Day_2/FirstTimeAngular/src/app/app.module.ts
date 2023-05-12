import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TextHolderComponent } from './Components/text-holder/text-holder.component';
import { ShowSliderComponent } from './Components/show-slider/show-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    TextHolderComponent,
    ShowSliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
