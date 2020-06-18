// import { Injectable, ɵConsole } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Persona } from '../models/Persona';
// import { Observable } from 'rxjs';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class PersonaService {
//
//   token: string = 'dsaybashbaijndaksjdn';
//
//   constructor(private http: HttpClient) { }
//
//   Url = 'http://localhost:8081/';
//
//   getPersonas(){
//     return this.http.get<Persona[]>(this.Url + 'Obra');
//   }
//
//   createPersonas(persona: Persona): Observable<any>{
//     const json = JSON.stringify(persona);
//     const header = new HttpHeaders().set('Content-Type', 'application/json');
//     return this.http.post(this.Url + 'Persona', json, {headers: header});
//   }
//
//   getPersonaId(id: number): Observable<any>{
//     const json = JSON.stringify(id);
//     const header = new HttpHeaders().set('Content-Type', 'application/json');
//     return this.http.get<Persona>(this.Url + 'Persona/' + id, {headers: header});
//   }
//
//   updatePersona(persona: Persona): Observable<any>{
//     const json = JSON.stringify(persona);
//     const header = new HttpHeaders().set('Content-Type', 'application/json');
//     return this.http.put<Persona>(this.Url + 'Persona/' + persona.id_persona, json, {headers: header});
//   }
//
//   deletePersona(persona: Persona): Observable<any>{
//     const header = new HttpHeaders().set('Content-Type', 'application/json');
//     return this.http.delete<Persona>(this.Url + 'Persona/' + persona.id_persona, {headers: header});
//   }
// }
