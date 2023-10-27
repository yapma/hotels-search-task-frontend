import { Component, Input, OnInit } from '@angular/core';
import { AlertType } from '../../enums/alert-type';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() messages: string[] = [];
  @Input() alertType: string = AlertType.Success;

  constructor() { }

  ngOnInit(): void {
  }

}
