import { Component, OnInit } from '@angular/core';
import { GetHotelsResponseDto } from '../../models/hotels-dtos/GetHotelsResponseDto';

@Component({
  selector: 'app-search-hotels',
  templateUrl: './search-hotels.component.html',
  styleUrls: ['./search-hotels.component.css']
})
export class SearchHotelsComponent implements OnInit {
  title: string = 'Show and Search'
  hotelsList: GetHotelsResponseDto[] = [
    {
      id: 1,
      name: 'Hotel Bahal',
      city: 'Tehran',
      state: 'Tehran',
      country: 'Iran',
      description: 'loaram ipsam loaram ipsam loaram ipsam loaram ipsam loaram ipsam',
      starsCount: 3
    },
    {
      id: 1,
      name: 'Hotel Bahal',
      city: 'Tehran',
      state: 'Tehran',
      country: 'Iran',
      description: 'loaram ipsam loaram ipsam loaram ipsam loaram ipsam loaram ipsam',
      starsCount: 3
    },
    {
      id: 1,
      name: 'Hotel Bahal',
      city: 'Tehran',
      state: 'Tehran',
      country: 'Iran',
      description: 'loaram ipsam loaram ipsam loaram ipsam loaram ipsam loaram ipsam',
      starsCount: 3
    },
    {
      id: 1,
      name: 'Hotel Bahal',
      city: 'Tehran',
      state: 'Tehran',
      country: 'Iran',
      description: 'loaram ipsam loaram ipsam loaram ipsam loaram ipsam loaram ipsam',
      starsCount: 3
    },
    {
      id: 1,
      name: 'Hotel Bahal',
      city: 'Tehran',
      state: 'Tehran',
      country: 'Iran',
      description: 'loaram ipsam loaram ipsam loaram ipsam loaram ipsam loaram ipsam',
      starsCount: 3
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
