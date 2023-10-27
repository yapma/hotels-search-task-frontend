import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rate',
  templateUrl: './star-rate.component.html',
  styleUrls: ['./star-rate.component.css']
})
export class StarRateComponent implements OnInit {

  @Input() rate!: number;
  rates = [1, 2, 3, 4, 5]

  constructor() { }

  ngOnInit(): void {
  }

}
