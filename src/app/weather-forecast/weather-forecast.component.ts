import { Component, OnInit } from '@angular/core';
import { WeatherForecastService } from 'src/services/weather-forecast.service';
import { SampleModelClass } from '../sample-model-class';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.css']
})
export class WeatherForecastComponent implements OnInit {
  
  public details:any={}
  response:any={}
  requestObject:SampleModelClass=<SampleModelClass>{}

   constructor(private weatherForecast: WeatherForecastService) {}
   ngOnInit() {
     
  }

  submit(data:any){
    console.log(data)
    console.log(data.cityName)
    console.log(data.country)
    console.log(data.address)
    console.log(data.mobile)

    
    this.requestObject.CityName=data.cityName
    this.requestObject.CountryName=data.country
    this.requestObject.Address =data.address

    
   let  resp=this.weatherForecast.sendCity(this.requestObject).subscribe(
    (responses: any) => {                           //next() callback
      console.log('response received')
      this.response = responses
   
    }); 

    console.log(this.response)
  }

    


  

}
