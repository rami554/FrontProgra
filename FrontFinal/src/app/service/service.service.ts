import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Obra } from '../models/Obra';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8081/Obra';

  getObras(){
    return this.http.get<Obra[]>(this.Url);
  }
}
