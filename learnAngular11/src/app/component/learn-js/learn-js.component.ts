import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-js',
  templateUrl: './learn-js.component.html',
  styleUrls: ['./learn-js.component.css']
})
export class LearnJSComponent implements OnInit {
 
  constructor() { }
  strict(a,b,c){
    console.log(a+b+b)  
  }
  ngOnInit(): void {
    this.strict(11,12,23);
  }
   

}
