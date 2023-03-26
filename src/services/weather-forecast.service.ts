import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SampleModelClass } from 'src/app/sample-model-class';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  apiURL: string = 'http://localhost:9002/weatherForecast?cityName='
  constructor(private httpClient: HttpClient) { }
  public response:any={}
sendCity(requestObject:SampleModelClass):Observable<any>{
  console.log(requestObject.CityName)
  var request=this.apiURL+requestObject.CityName;
  console.log(request)
  return this.httpClient.get(request);
  
}

}
