import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { Obra } from '../models/Obra';
import swal from 'sweetalert';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  obra: Obra = new Obra();
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    const id = localStorage.getItem('id');
    this.service.getObraId(+id)
    .subscribe(data => {
      this.obra = data;
    })
  }

  Actualizar(obra: Obra){
    this.service.updateObra(obra)
    .subscribe(data =>{
      this.obra = data;
      swal("Exito", "Obra Actualizada","success");
      this.router.navigate(['listar']);
    })
  }

}
