import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AesComponent } from './aes/aes.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'feedback', component:FeedbackComponent},
  {path:'weather-forecast', component:WeatherForecastComponent},
  {path:'aes', component:AesComponent},
  {path:'login', component:LoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
