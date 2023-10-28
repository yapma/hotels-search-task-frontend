import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GetHotelsResponseDto } from '../../models/hotels-dtos/GetHotelsResponseDto';
import { HotelsService } from '../../services/hotels.service';
import { AlertData } from 'src/app/shared/models/AlertData';
import { AlertType } from 'src/app/shared/enums/alert-type';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hotel-item',
  templateUrl: './hotel-item.component.html',
  styleUrls: ['./hotel-item.component.css']
})
export class HotelItemComponent implements OnInit {
  @Input() hotelData!: GetHotelsResponseDto;
  @Output() onDelete = new EventEmitter<AlertData>();
  constructor(private hotelsService: HotelsService, 
    private modalService: NgbModal) { }

  ngOnInit(): void {
  }


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result;
  } 

  delete() {
    this.hotelsService.deleteHotel(this.hotelData.id)
      .subscribe(
        {
          next: (value: void) => {
            this.modalService.dismissAll();
            this.onDelete.emit({
              alertType: AlertType.Success,
              messages: ["Hotel data deleted."]
            })
          },
          error: (error: any) => {
            this.modalService.dismissAll();
            this.onDelete.emit({
              alertType: AlertType.Success,
              messages: ["An error occered on deleting data."]
            })
          },
          complete: () => { }
        }
      );
  }
}
