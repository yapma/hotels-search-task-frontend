import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterNewHotelComponent } from './components/register-new-hotel/register-new-hotel.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';
import { SearchHotelsComponent } from './components/search-hotels/search-hotels.component';



@NgModule({
  declarations: [
    RegisterNewHotelComponent,
    UpdateHotelComponent,
    SearchHotelsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchHotelsComponent
  ]
})
export class HotelsModule { }
