import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  addUser(user:User){
    return this.http.post('http://localhost:3000/users',user);
  }
  getUsers(){
    return this.http.get('http://localhost:3000/users').pipe(delay(2000));
  }
  deleteUser(id:number){
    return this.http.delete(`http://localhost:3000/users/${id}`);
  }
}
