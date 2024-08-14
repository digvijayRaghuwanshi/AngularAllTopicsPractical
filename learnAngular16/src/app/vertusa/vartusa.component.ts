import {Component} from '@angular/core';
@Component({
    templateUrl:'vertusa.component.html',
    selector:'app-vertusa',
    styleUrls:['vertusa.component.scss']
})
export class vertusa {
   canload=true;
   get:any;
   sayHello(){
    console.log('Hello World')
    localStorage.setItem('user','digvijay')
   }
   deleteLocalStorageItem(){
    localStorage.removeItem('user')
    localStorage.clear()//clear all Items
   }
   LocalStorageItem(){
   this.get= localStorage.getItem('user');
   }
}