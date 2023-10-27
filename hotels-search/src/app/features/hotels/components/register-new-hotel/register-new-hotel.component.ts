import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BaseHotelsComponents } from '../BaseHotelsComponents';
import { AlertData } from 'src/app/shared/models/AlertData';
import { AlertType } from 'src/app/shared/enums/alert-type';
import { HotelsService } from '../../services/hotels.service';
import { RegisterHotelRequestDto } from '../../models/hotels-dtos/RegisterHotelRequestDto';

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

  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerHotelForm.valid) {
      this.registerHotel()
    }
  }

  registerHotel() {
    var dto = this.convertFormToDto(this.registerHotelForm)
    this.hotelsService.registerHotel(dto)
      .subscribe(
        {
          next: (value: void) => {
            this.alertData = {
              alertType: AlertType.Success,
              messages: ["The hotel information has been successfully registered."]
            }
          },
          error: (error: any) => {
            this.alertData = {
              alertType: AlertType.Error,
              messages: error.error.errors.Messages
            }
          },
        }
      );
  }

  convertFormToDto(form: FormGroup): RegisterHotelRequestDto {
    var dto: RegisterHotelRequestDto = {
      city: form.controls.city.value,
      country: form.controls.country.value,
      state: form.controls.state.value,
      description: form.controls.description.value,
      name: form.controls.name.value,
      starsCount: form.controls.rate.value,
    }
    return dto;
  }

}
