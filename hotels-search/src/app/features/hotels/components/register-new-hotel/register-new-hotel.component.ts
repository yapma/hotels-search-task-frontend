import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseHotelsComponents } from '../BaseHotelsComponents';
import { AlertData } from 'src/app/shared/models/AlertData';
import { AlertType } from 'src/app/shared/enums/alert-type';

@Component({
  selector: 'app-register-new-hotel',
  templateUrl: './register-new-hotel.component.html',
  styleUrls: ['./register-new-hotel.component.css']
})
export class RegisterNewHotelComponent implements OnInit, BaseHotelsComponents {
  title: string = 'Register New Hotel'
  alertData: AlertData = {
    alertType: AlertType.Warning,
    messages: []
  };

  registerHotelForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    rate: new FormControl('1', [Validators.required, Validators.min(1), Validators.max(5)]),
  });
  submitted = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.registerHotelForm);
    
  }

}
