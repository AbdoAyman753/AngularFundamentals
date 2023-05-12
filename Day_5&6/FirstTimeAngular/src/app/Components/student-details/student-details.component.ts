import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersInfoService } from 'src/app/Services/users-info.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit{
  student:any;
  ID:any;
  constructor(private myRoute:ActivatedRoute, private usersService:UsersInfoService){
    // console.log(myRoute.snapshot.params["id"]);
    this.ID = myRoute.snapshot.params["id"];
  }
  ngOnInit(): void {
    this.usersService.getUserById(this.ID).subscribe({
      next:(data)=>{
        this.student = data;
      },
      error:(e)=>{
        throw(e);
      }
    })
  }


}
