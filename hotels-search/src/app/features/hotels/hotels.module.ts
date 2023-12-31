import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterNewHotelComponent } from './components/register-new-hotel/register-new-hotel.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';
import { SearchHotelsComponent } from './components/search-hotels/search-hotels.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelItemComponent } from './components/hotel-item/hotel-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRateComponent } from './components/star-rate/star-rate.component';


@NgModule({
  declarations: [
    RegisterNewHotelComponent,
    UpdateHotelComponent,
    SearchHotelsComponent,
    HotelItemComponent,
    StarRateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HotelsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchHotelsComponent
  ]
})
export class HotelsModule { }
