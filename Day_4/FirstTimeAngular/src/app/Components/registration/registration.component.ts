import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  myValidation = new FormGroup({
    name: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    age: new FormControl("", [Validators.pattern(/^[0-9]+$/),Validators.max(40), Validators.min(20)]),
    email: new FormControl("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)])
  });

  //Event For Sending Data
  @Output("dataEvnt") additionEvent = new EventEmitter();
  //Function to invoke event
  userError = 0;
  ageError = 0;
  emailError = 0;
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
    if(!this.myValidation.controls["age"].valid){
      this.ageError = 1;
    }else{
      this.ageError = 0;
    }
    if(!this.myValidation.controls["email"].valid){
      this.emailError = 1;
    }else{
      this.emailError = 0;
    }

    if(this.userError || this.ageError || this.emailError){
      throw("Invalid Data...");
    }


    //Send Data
    this.additionEvent.emit({
      name: this.myValidation.controls["name"].value,
      age: this.myValidation.controls["age"].value,
      email: this.myValidation.controls["email"].value
    });
    this.myValidation.reset();
    // this.myValidation.controls["name"].markAsUntouched();
    // this.myValidation.controls["age"].markAsUntouched();
    // this.myValidation.controls["email"].markAsUntouched();
    


  }
}
