// import { Injectable, ɵConsole } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Exposicion } from '../models/Exposicion';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   deps: [], providedIn: undefined, useClass: undefined, useExisting: undefined, useFactory(p0) {
//   }, useValue: undefined
// })
// export class ExposicionService {
//
//   token: string = 'dsaybashbaijndaksjdn';
//
//   constructor(public http: HttpClient) { }
//
//   Url = 'http://localhost:8081/';
//
//   getExposiciones(){
//     return this.http.get<Exposicion[]>(this.Url + 'Exposicion');
//   }
//
//   createExposiciones(exposicion: Exposicion): Observable<any>{
//     const json = JSON.stringify(exposicion);
//     const header = new HttpHeaders().set('Content-Type', 'application/json');
//     return this.http.post(this.Url + 'Exposicion', json, {headers: header});
//   }
//
//   getExposicionesId(id: number): Observable<any>{
//     const json = JSON.stringify(id);
//     const header = new HttpHeaders().set('Content-Type', 'application/json');
//     return this.http.get<Exposicion>(this.Url + 'Exposicion/' + id, {headers: header});
//   }
//
//   updateExposicion(exposicion: Exposicion): Observable<any>{
//     const json = JSON.stringify(exposicion);
//     const header = new HttpHeaders().set('Content-Type', 'application/json');
//     return this.http.put<Exposicion>(this.Url + 'Exposicion/' + exposicion.idExposicion, json, {headers: header});
//   }
//
//   deleteExposicion(exposicion: Exposicion): Observable<any>{
//     const header = new HttpHeaders().set('Content-Type', 'application/json');
//     return this.http.delete<Exposicion>(this.Url + 'Exposicion/' + exposicion.idExposicion, {headers: header});
//   }
// }
