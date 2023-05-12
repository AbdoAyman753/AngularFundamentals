import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersInfoService } from 'src/app/Services/users-info.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit{
  students:any;
  constructor(private usersService:UsersInfoService){

  }
  ngOnInit(): void {
    this.usersService.getAllUsers().subscribe({
      next:(data)=>{
        this.students = data;
      },
      error:(e)=>{
        throw(e);
      }
    });
  }


}
