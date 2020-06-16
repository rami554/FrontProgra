import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Obra } from '../models/Obra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8081/Obra';

  getObras(){
    return this.http.get<Obra[]>(this.Url);
  }

  createObras(obra: Obra): Observable<Obra>{
    return this.http.post<Obra>(this.Url + '/add', obra);
  }
}
