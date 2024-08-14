import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  data1 = ["jay","Rahul"]

  addData(){
    alert("hi");
  }
}
