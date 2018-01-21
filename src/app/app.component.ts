import { Component } from '@angular/core';
import {Person} from './models/Person';

@Component({
  selector: 'my-custom-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  employeeList : Array<Person> = [
    {name: 'ABC', age: 10},
    {name: 'DLKD', age: 20},
    {name: 'OLDD', age: 30}
  ];
  totalCount = this.employeeList.length;
  sayGreeting(event, inputVal){
    console.log(event);
    alert("hi " + inputVal);
  }
 
}
