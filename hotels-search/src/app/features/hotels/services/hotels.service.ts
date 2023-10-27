import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetHotelsResponseDto } from '../models/hotels-dtos/GetHotelsResponseDto';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelsService {

  private readonly url: string = `${environment.baseUrl}/Hotels`
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
  ) { }

  getHotels(id: number = 0, title: string = ""): Observable<GetHotelsResponseDto[]> {
    const url = `${this.url}/GetHotels?id=${id}&title=${title}`;
    return this.http.get<GetHotelsResponseDto[]>(url);
  }

  deleteHotel(id: number = 0): Observable<void> {
    const url = `${this.url}/DeleteHotel?id=${id}`;
    return this.http.delete<void>(url);
  }
}
