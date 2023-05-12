import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './Components/registration/registration.component';
import { DataTableComponent } from './Components/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
