import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './Components/registration/registration.component';
import { DataTableComponent } from './Components/data-table/data-table.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { ErrorComponentComponent } from './Components/error-component/error-component.component';
import { ProfileComponentComponent } from './Components/profile-component/profile-component.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { BgColorDirective } from './Directives/bg-color.directive';
import { HttpClientModule } from '@angular/common/http';

let routes:Routes = [
  {path:'',redirectTo:'users',pathMatch:'full'},
  {path:'users',component:DataTableComponent},
  {path:'users/:id',component:StudentDetailsComponent},
  {path:'profile',component:ProfileComponentComponent},
  {path:'**',component:ErrorComponentComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    DataTableComponent,
    NavBarComponent,
    StudentDetailsComponent,
    ErrorComponentComponent,
    ProfileComponentComponent,
    BgColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
