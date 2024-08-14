import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class LearnHtmlServiceService{
obj:any=[]
constructor(public http:HttpClient){}
change(event:any){
   this.http.get('assets/data.json').subscribe((res:any)=>{
    this.obj=res;
    // console.log(res);
  });
}
}