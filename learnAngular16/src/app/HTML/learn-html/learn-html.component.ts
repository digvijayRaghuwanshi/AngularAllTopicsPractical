import { Component,OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LearnHtmlServiceService } from '../learn-html-service.service';

@Component({
  selector: `#app-learn-html`,
  templateUrl: './learn-html.component.html',
  styleUrls: ['./learn-html.component.scss']
})
export class LearnHtmlComponent implements OnChanges,OnInit {
  getData:any;
  constructor( public learn:LearnHtmlServiceService) { }

  ngOnInit() {
   
  this.learn.change(event);
  }
  ngOnChanges(changes:SimpleChanges){
    this.learn.change(event);
    console.log(changes)
  }
  call(){
    this.getData=this.learn.obj;
    console.log(this.learn.obj)
  }
  add="";
  addData(data:any){
    this.add=data.target.innerText
    console.log(data.target.innerText)
  }
}
