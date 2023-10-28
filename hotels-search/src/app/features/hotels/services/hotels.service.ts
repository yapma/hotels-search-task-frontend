import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetHotelsResponseDto } from '../models/hotels-dtos/GetHotelsResponseDto';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RegisterHotelRequestDto } from '../models/hotels-dtos/RegisterHotelRequestDto';
import { UpdateHotelRequestDto } from '../models/hotels-dtos/UpdateHotelRequestDto';

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
    const url = `${this.url}/get?id=${id}&title=${title}`;
    return this.http.get<GetHotelsResponseDto[]>(url);
  }

  deleteHotel(id: number = 0): Observable<void> {
    const url = `${this.url}/delete?id=${id}`;
    return this.http.delete<void>(url);
  }

  registerHotel(model: RegisterHotelRequestDto): Observable<void> {
    const url = `${this.url}/post`;
    return this.http.post<void>(url, model);
  }

  updateHotel(id: number, model: UpdateHotelRequestDto): Observable<void> {
    const url = `${this.url}/put/${id}`;
    return this.http.put<void>(url, model);
  }
}
