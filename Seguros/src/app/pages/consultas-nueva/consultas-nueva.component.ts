import { Component, OnInit } from '@angular/core';
import { ConsultaDto } from 'src/app/model/consulta-dto';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-consultas-nueva',
  templateUrl: './consultas-nueva.component.html',
  styleUrls: ['./consultas-nueva.component.scss']
})
export class ConsultasNuevaComponent implements OnInit {

  consulta:ConsultaDto = {
    titulo: null,
    consulta: null
  }

  constructor(
    private oConsultasService:ConsultasService
  ) { }

  ngOnInit() {
  }

  post_consulta(){
    this.oConsultasService.post(this.consulta).subscribe(
      resultado => {
        console.log(resultado);
      },
      error => {
        console.log(error);
      }
    )
  }

}
