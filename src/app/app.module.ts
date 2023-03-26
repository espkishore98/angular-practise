import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule } from '@angular/forms';
import { EmailServiceService } from './email-service.service';
import { PlaylistComponent } from './playlist/playlist.component';
import { WeatherForecastComponent } from './weather-forecast/weather-forecast.component';
import { WeatherForecastService } from 'src/services/weather-forecast.service';
import { HttpClientModule } from '@angular/common/http';
import { AesComponent } from './aes/aes.component';
import { AesService } from 'src/services/aes.service';
import { SampleModelClass } from './sample-model-class';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    FeedbackComponent,
    BlogComponent,
    PlaylistComponent,
    WeatherForecastComponent,
    AesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [EmailServiceService,WeatherForecastService,AesService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
