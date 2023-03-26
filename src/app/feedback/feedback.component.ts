import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { EmailServiceService } from '../email-service.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  loginCredentials:any={} 
  submit(){
  console.log(this.loginCredentials)
  this.emailService.sendEmail(this.loginCredentials)
  }

  constructor(private emailService:EmailServiceService){}

  ngOnInit(): void {
  }

}
