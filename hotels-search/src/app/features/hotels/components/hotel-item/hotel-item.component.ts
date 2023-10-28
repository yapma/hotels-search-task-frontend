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
  @Output() onDelete = new EventEmitter<number>();
  constructor(private hotelsService: HotelsService) { }

  ngOnInit(): void {
  }

  delete() {
    this.onDelete.emit(this.hotelData.id)
  }

}
