import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Obra } from '../models/Obra';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  token: string = 'dsaybashbaijndaksjdn';

  constructor(private http: HttpClient) { }

  Url = 'http://localhost:8081/';

  getObras(){
    return this.http.get<Obra[]>(this.Url + 'Obra');
  }
  
  getPersonas(){
    return this.http.get<Persona[]>(this.Url + 'Persona');
  }

  createObras(obra: Obra) {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token
    });
    return this.http.post(this.Url + 'add', obra, {headers: header});
  }
}
