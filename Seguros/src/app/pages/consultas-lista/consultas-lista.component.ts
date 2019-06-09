import { Component, OnInit } from '@angular/core';
import { Consultas } from 'src/app/model/consultas';
import { ConsultasService } from 'src/app/services/consultas.service';
import { ConsultaDto } from 'src/app/model/consulta-dto';

@Component({
  selector: 'app-consultas-lista',
  templateUrl: './consultas-lista.component.html',
  styleUrls: ['./consultas-lista.component.scss']
})
export class ConsultasListaComponent implements OnInit {

  cargando = false;
  consultas:Consultas[] = [];

  consulta:ConsultaDto = {
    titulo: null,
    consulta: null
  }

  constructor(
    private oConsultasService:ConsultasService
  ) { }

  ngOnInit() {
    this.oConsultasService.get_all();
    this.get_consultasUsuario();
  }

  get_consultasUsuario(){
    this.cargando = true;
    this.oConsultasService.get_usuario().subscribe(
      resultado=>{
        this.cargando = false;
        this.consultas = resultado;
      },
      error=>{
        this.cargando = false;
        console.log(error);
      }
    );
  }

}
