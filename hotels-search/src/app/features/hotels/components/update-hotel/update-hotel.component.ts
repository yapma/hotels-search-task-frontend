import { Component, OnInit } from '@angular/core';
import { AlertType } from 'src/app/shared/enums/alert-type';
import { AlertData } from 'src/app/shared/models/AlertData';
import { BaseHotelsComponents } from '../BaseHotelsComponents';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelsService } from '../../services/hotels.service';
import { UpdateHotelRequestDto } from '../../models/hotels-dtos/UpdateHotelRequestDto';
import { GetHotelsResponseDto } from '../../models/hotels-dtos/GetHotelsResponseDto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit, BaseHotelsComponents {
  title: string = 'Register New Hotel'
  alertData: AlertData = {
    alertType: AlertType.Warning,
    messages: []
  };
  updateHotelForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    rate: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(5)]),
  });
  submitted = false;
  hotelId = -1

  constructor(private hotelsService: HotelsService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.hotelId = Number(this.route.snapshot.paramMap.get('id'))
    console.log('this.hotelId', this.hotelId)
    this.getHotels(this.hotelId)
  }

  onSubmit() {
    this.submitted = true;
    if (this.updateHotelForm.valid) {
      this.updateHotel()
    }
  }

  getHotels(id: number): void {
    this.hotelsService.getHotels(id, '')
      .subscribe(
        {
          next: (value: GetHotelsResponseDto[]) => {
            this.fillFormByGetDto(value[0])
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

  updateHotel() {
    var dto = this.convertFormToDto(this.updateHotelForm)
    this.hotelsService.updateHotel(this.updateHotelForm.controls.id.value ?? 0, dto)
      .subscribe(
        {
          next: (value: void) => {
            this.alertData = {
              alertType: AlertType.Success,
              messages: ["The hotel information has been successfully updated."]
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

  convertFormToDto(form: FormGroup): UpdateHotelRequestDto {
    var dto: UpdateHotelRequestDto = {
      id: form.controls.id.value,
      city: form.controls.city.value,
      country: form.controls.country.value,
      state: form.controls.state.value,
      description: form.controls.description.value,
      name: form.controls.name.value,
      starsCount: form.controls.rate.value,
    }
    return dto;
  }

  fillFormByGetDto(dto: GetHotelsResponseDto): void {
    this.updateHotelForm.controls.id.setValue(dto.id)
    this.updateHotelForm.controls.city.setValue(dto.city)
    this.updateHotelForm.controls.country.setValue(dto.country)
    this.updateHotelForm.controls.state.setValue(dto.state)
    this.updateHotelForm.controls.description.setValue(dto.description)
    this.updateHotelForm.controls.name.setValue(dto.name)
    this.updateHotelForm.controls.rate.setValue(dto.starsCount)
  }

}
