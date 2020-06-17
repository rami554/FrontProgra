import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Obra } from '../models/Obra';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  obras: Obra[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getObras()
    .subscribe(data => {
      this.obras = data;
    });
  }

  Editar(obra: Obra): void{
    localStorage.setItem('id', obra.idObra.toString());
    this.router.navigate(['edit']);
  }

}
