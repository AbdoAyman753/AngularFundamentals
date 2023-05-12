import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UsersInfoService {

  //1- URL
  private readonly Base_URL = "https://jsonplaceholder.typicode.com/users";

  constructor(private readonly myHttpClient:HttpClient) {
  }

  getAllUsers(){
    return this.myHttpClient.get(this.Base_URL);
  }

  getUserById(id:any){
    return this.myHttpClient.get(`${this.Base_URL}/${id}`);
  }
}
