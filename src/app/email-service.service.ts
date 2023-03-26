import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  constructor() { }

  sendEmail(feedbackData:Object){
    console.log(feedbackData)
  }

}