import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FirstTimeAngular';
  Students:{name:string, age:string, email:string}[] = [];

  dataArrived(student_data:{name:string, age:string, email:string}){
    // console.log(student_data);
    this.Students.push({name:student_data.name, age:student_data.age, email:student_data.email});
    console.log(this.Students);
  }
}
