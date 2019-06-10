import { Component, OnInit } from '@angular/core';
import { Consultas } from 'src/app/model/consultas';
import { ActivatedRoute } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';
import { StrignDto } from 'src/app/model/string-dto';

@Component({
  selector: 'app-consultas-admin-ver',
  templateUrl: './consultas-admin-ver.component.html',
  styleUrls: ['./consultas-admin-ver.component.scss']
})
export class ConsultasAdminVerComponent implements OnInit {

  idConsulta:string;
  consultas:Consultas[] = [];

  consultaTexto:StrignDto ={
    value: null
  }

  cargando:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private oConsultasService:ConsultasService
  ) { }

  ngOnInit() {
    this.idConsulta = this.route.snapshot.paramMap.get("id");
    this.oConsultasService.get_all();
    this.get_consultasUsuario();
  }

  get_consultasUsuario(){
    this.cargando = true;
    this.oConsultasService.get_all().subscribe(
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

  print_date(date:string){
    let oDate = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return oDate.toLocaleDateString('es-UY', options);
  }

  put_respuesta(){
    this.oConsultasService.put_respuesta(this.idConsulta, this.consultaTexto).subscribe(
      resultado => {
        console.log(resultado);
      },
      error => {
        console.log(error);
      }
    );
  }
}
