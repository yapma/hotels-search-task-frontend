import { Component, Input, OnInit } from '@angular/core';
import { AlertType } from '../../enums/alert-type';
import { AlertData } from '../../models/AlertData';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() alertData: AlertData = {
    alertType : AlertType.Success,
    messages : []
  }

  constructor() { }

  ngOnInit(): void {
  }
}
