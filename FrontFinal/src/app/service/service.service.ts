import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Obra } from '../models/Obra';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8081/';

  getObras(){
    return this.http.get<Obra[]>(this.Url + 'Obra');
  }

  createObras(obra: Obra) {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.Url, obra, {headers: header});
  }
}
