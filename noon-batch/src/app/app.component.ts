import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  source = 'https://pbs.twimg.com/profile_images/875749462957670400/T0lwiBK8.jpg';
  src : string[] = [''];
  blue = "nothing";
  myStyle = "yellow";
  inputValue;
  custom;
  myArray = [{
    name: 'Nitin',
    phone: 987654
  },
  {
    name: 'Nitin',
    phone: 4567
  },
  {
    name: 'Nitin',
    phone: 938264
  },
  {
    name: 'Nitin',
    phone: 6587987
  }]
  myMethod(){
    
  }
}
