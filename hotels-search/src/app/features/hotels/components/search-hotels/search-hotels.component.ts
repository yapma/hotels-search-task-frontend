import { Component, OnInit } from '@angular/core';
import { GetHotelsResponseDto } from '../../models/hotels-dtos/GetHotelsResponseDto';
import { HotelsService } from '../../services/hotels.service';
import { BaseHotelsComponents } from '../BaseHotelsComponents';
import { AlertType } from 'src/app/shared/enums/alert-type';

@Component({
  selector: 'app-search-hotels',
  templateUrl: './search-hotels.component.html',
  styleUrls: ['./search-hotels.component.css']
})
export class SearchHotelsComponent implements OnInit, BaseHotelsComponents {
  title: string = 'Show and Search'
  messages: string[] = []
  alertType: AlertType = AlertType.Warning

  hotelsList: GetHotelsResponseDto[] = []

  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    this.hotelsService.getHotels()
      .subscribe(
        {
          next: (value: GetHotelsResponseDto[]) => {
            this.messages = []
            this.hotelsList = value
          },
          error: (error: any) => {
            this.messages = error.error.errors.Messages
          },
          complete: () => { }
        }
      );
  }

}
