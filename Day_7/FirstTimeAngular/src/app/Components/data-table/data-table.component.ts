import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersInfoService } from 'src/app/Services/users-info.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit{
  students:any;
  deleteConfirmation = 0;
  constructor(private usersService:UsersInfoService,private  myRouter:Router){}

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
  
  deletePressed(){

  }

  deleteItem(student:any){
    console.log(`trying to delete item ${student.id}`);
    this.usersService.deleteUserById(student.id).subscribe({
      next:(data)=>{
        this.students = this.students.filter((item:any) =>{item.id !== student.id});
      },
      error:(e)=>{
        throw(e);
      }
    });
    location.reload();
  }

  update(student:any){
    this.myRouter.navigateByUrl(`editUser/${student.id}`);
  }

  addItem(){
    this.myRouter.navigateByUrl(`register`);
  }
}
