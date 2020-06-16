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

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(obra: Obra){
    this.service.createObras(obra).subscribe(data => {
      alert('Se agrego con Exito!!!');
      this.router.navigate(['listar']);
    });
  }
}
