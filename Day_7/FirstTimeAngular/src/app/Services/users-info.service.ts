import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {

  //1- URL
  private readonly Base_URL = "http://localhost:3000/users";

  constructor(private readonly myHttpClient:HttpClient) {
  }

  getAllUsers(){
    return this.myHttpClient.get(this.Base_URL);
  }

  getUserById(id:any){
    return this.myHttpClient.get(`${this.Base_URL}/${id}`);
  }

  deleteUserById(id:any){
    console.log("In user service deleting item "+id);
    return this.myHttpClient.delete(`${this.Base_URL}/${id}`)
    // console.log(this.getAllUsers())
  }

  createUser(student:any){
    console.log(student);
    return this.myHttpClient.post(this.Base_URL, student);
  }

  updateUserById(id:any,student:any){
    return this.myHttpClient.put(`${this.Base_URL}/${id}`,student)
  }
}
