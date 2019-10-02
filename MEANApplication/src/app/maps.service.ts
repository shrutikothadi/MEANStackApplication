import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface Location{
  latitude :String;
  longitude:String;
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http : HttpClient) { }

  getLocation() { 
    console.log("hiii");
    return this.http.get<Location>('http://api.ipapi.com/53.125.67.39?access_key=ccd66df60c79ff6348d31749f2631c8f')
  }
}
