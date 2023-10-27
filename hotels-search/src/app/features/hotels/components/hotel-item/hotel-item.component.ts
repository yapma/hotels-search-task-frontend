import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetHotelsResponseDto } from '../../models/hotels-dtos/GetHotelsResponseDto';
import { HotelsService } from '../../services/hotels.service';
import { AlertData } from 'src/app/shared/models/AlertData';
import { AlertType } from 'src/app/shared/enums/alert-type';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {
  @Input() hotelData!: GetHotelsResponseDto;
  @Output() onDelete = new EventEmitter<AlertData>();
  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
  }

  delete() {
    this.hotelsService.deleteHotel(this.hotelData.id)
      .subscribe(
        {
          next: (value: void) => {
            this.onDelete.emit({
              alertType: AlertType.Success,
              messages: ["Hotel data deleted."]
            })
          },
          error: (error: any) => {
            this.onDelete.emit({
              alertType: AlertType.Error,
              messages: ["An error occured on deleting data."]
            })
          },
          complete: () => { }
        }
      );
  }

}
