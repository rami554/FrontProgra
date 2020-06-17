import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Obra } from '../models/Obra';
import { Observable } from 'rxjs';

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

  createObras(obra: Obra): Observable<any>{
    const json = JSON.stringify(obra);
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post(this.Url + 'Obra', json, {headers: header});
  }

  getObraId(id: number): Observable<any>{
    const json = JSON.stringify(id);
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.get<Obra>(this.Url + 'Obra/' + id, {headers: header});
  }

  updateObra(obra: Obra): Observable<any>{
    const json = JSON.stringify(obra);
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<Obra>(this.Url + 'Obra/' + obra.idObra, json, {headers: header});
  }

  deleteObra(obra: Obra): Observable<any>{
    const header = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<Obra>(this.Url + 'Obra/' + obra.idObra, {headers: header});
  }
}
