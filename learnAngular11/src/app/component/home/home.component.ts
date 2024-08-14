import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isdisable=false;
  name="Hide/Show";
  nametxt:any;
  setdata:any;
  displayData:any;
  constructor(private user:UserService) { }
  getData(){
    this.setdata=this.nametxt;
  }
  data = [
    {
      name: "jay"
    },
    {
      name: "Rahul"
    }
  ]

  addData(){
   this.displayData = this.user.data1.push("Kiwi");
  }
  ngOnInit(): void {
  }

}
