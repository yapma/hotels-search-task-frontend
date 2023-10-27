import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterNewHotelComponent } from './components/register-new-hotel/register-new-hotel.component';
import { UpdateHotelComponent } from './components/update-hotel/update-hotel.component';
import { SearchHotelsComponent } from './components/search-hotels/search-hotels.component';

const routes: Routes = [
    { path: 'search',  component: SearchHotelsComponent },
    { path: 'register',  component: RegisterNewHotelComponent },
    { path: 'update', component: UpdateHotelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
