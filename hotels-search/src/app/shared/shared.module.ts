import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './componenets/alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    AlertComponent
  ]
})
export class SharedModule { }
