import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Obra } from '../models/Obra';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  obra: Obra = {
    idObra: null,
    titulo: null,
    estilo: null,
    precio: null,
    idPropietario: null,
    idArtista: null,
  }

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(){
    this.service.createObras(this.obra).subscribe((data) => {
      alert('Obra Registrada');
      console.log(data);
    }, (error) => {
      console.log(error);
      alert('algo salio mal');
    });
  }
}
