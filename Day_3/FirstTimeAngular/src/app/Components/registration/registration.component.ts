import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  name="";
  age="";
  //Event For Sending Data
  @Output("dataEvnt") additionEvent = new EventEmitter();
  //Function to invoke event
  Add(){
    if(this.name.length < 3 || !this.name){
      throw("[Typescript]: Name must be at least 3 characters long.")
    }
    if(+this.age < 20 || +this.age>40){
      throw("[Typescript]: Age must be is {[20:40]}.");
    }
    this.additionEvent.emit({name:this.name,age:this.age});
  }
}
