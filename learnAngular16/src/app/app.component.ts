import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learnAngular16';
  addName:string='';
  canload=true;
  objectConvert:any;
  obj=[{
    firstName:'Digvijay',
    lastName: 'Raghuwanshi'
  }]
  ngOnInit(){
   this.objectConvert=this.obj; 
  }
  changeTextName(event:any){
    this.addName=event.target.value;
  }
}
