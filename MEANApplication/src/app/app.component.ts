import { Component } from '@angular/core';
import { MapsService } from './maps.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lat:String='';
  lng:String='';
  counter : number = 0;

  location : Object;

  constructor(private map : MapsService) {}

  increment(){
    this.counter = this.counter+1;
  }
  decrement(){
    this.counter = this.counter-1;
  }

  ngOninit(){
    this.map.getLocation().subscribe(data=>{
      console.log(data);
      this.lat=data.latitude;
      this.lng=data.longitude;
    })
  }
}
