import { Component } from '@angular/core';

@Component({
  selector: 'my-custom-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  sayGreeting(event, inputVal){
    console.log(event);
    alert("hi " + inputVal);
  }
 
}
