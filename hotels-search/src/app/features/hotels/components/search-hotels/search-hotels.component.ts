import { Component, OnInit } from '@angular/core';
import { GetHotelsResponseDto } from '../../models/hotels-dtos/GetHotelsResponseDto';
import { HotelsService } from '../../services/hotels.service';
import { BaseHotelsComponents } from '../BaseHotelsComponents';
import { AlertType } from 'src/app/shared/enums/alert-type';
import { AlertData } from 'src/app/shared/models/AlertData';

@Component({
  selector: 'app-search-hotels',
  templateUrl: './search-hotels.component.html',
  styleUrls: ['./search-hotels.component.css']
})
export class SearchHotelsComponent implements OnInit, BaseHotelsComponents {
  title: string = 'Show and Search'
  alertData: AlertData = {
    alertType: AlertType.Warning,
    messages: []
  };

  hotelsList: GetHotelsResponseDto[] = []
  searchedName = "";
  
  selectedId = -1
  selectedItem : GetHotelsResponseDto | undefined

  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(hotelName: string = '', alertData: AlertData | undefined = undefined): void {
    this.hotelsService.getHotels(0, hotelName)
      .subscribe(
        {
          next: (value: GetHotelsResponseDto[]) => {
            this.alertData.messages = []
            this.hotelsList = value
          },
          error: (error: any) => {
            this.hotelsList = []
            this.alertData.messages = error.error.errors.Messages
            this.alertData.alertType = AlertType.Warning
          },
          complete: () => {
            if (alertData)
              this.alertData = alertData
          }
        }
      );
  }

  onSearch(): void {
    if (this.searchedName.length == 0 || this.searchedName.length > 2)
      this.getHotels(this.searchedName)
  }

  onDelete(id: number) {
    this.selectedId = id
    this.selectedItem = this.hotelsList.find(x => x.id == id)
  }

  delete() {
    this.hotelsService.deleteHotel(this.selectedId)
      .subscribe(
        {
          next: (value: void) => {
            var alert: AlertData = {
              alertType: AlertType.Success,
              messages: ["Hotel data deleted."]
            }
            this.getHotels(this.searchedName, alert)
          },
          error: (error: any) => {
            this.alertData = {
              alertType: AlertType.Success,
              messages: ["An error occered on deleting data."]
            }
          },
          complete: () => { }
        }
      );
  }

}
