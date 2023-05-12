import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersInfoService } from 'src/app/Services/users-info.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  constructor(private usersService:UsersInfoService){}

  myValidation = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    userName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)])
  });

  // Event For Sending Data
  // @Output("dataEvnt") additionEvent = new EventEmitter();
  // Function to invoke event
  userError = 0;
  userNameError = 0;
  emailError = 0;
  additionSuccess = 0;

  Add() {
    //Check errors
    // console.log(this.myValidation.controls["name"]);
    // console.log(this.myValidation.controls["age"]);
    // console.log(this.myValidation.controls["email"]);
    if(!this.myValidation.controls["name"].valid){
      this.userError = 1;
    }else{
      this.userError = 0;
    }
    if(!this.myValidation.controls["userName"].valid){
      this.userNameError = 1;
    }else{
      this.userNameError = 0;
    }
    if(!this.myValidation.controls["email"].valid){
      this.emailError = 1;
    }else{
      this.emailError = 0;
    }

    if(this.userError || this.userNameError || this.emailError){
      this.additionSuccess = 0;
      throw("Invalid Data...");
    }
    //Send Data
    let student ={
      "name": this.myValidation.controls["name"].value,
      "username": this.myValidation.controls["userName"].value,
      "email": this.myValidation.controls["email"].value
    };
    this.usersService.createUser(student).subscribe({
        next:(data)=>{
          // student['id'] = data.id;
        },
        error:(e)=>{
          throw(e);
        }
      })
    // this.additionEvent.emit({
    //   name: this.myValidation.controls["name"].value,
    //   age: this.myValidation.controls["userName"].value,
    //   email: this.myValidation.controls["email"].value
    // });
    this.myValidation.reset();
    this.myValidation.controls["name"].markAsUntouched();
    this.myValidation.controls["userName"].markAsUntouched();
    this.myValidation.controls["email"].markAsUntouched();

    this.additionSuccess = 1;

  }
}
