import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consultas } from 'src/app/model/consultas';
import { ConsultasService } from 'src/app/services/consultas.service';

@Component({
  selector: 'app-consultas-ver',
  templateUrl: './consultas-ver.component.html',
  styleUrls: ['./consultas-ver.component.scss']
})
export class ConsultasVerComponent implements OnInit {

  idConsulta:string;
  consultas:Consultas[] = [];

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

  print_date(date:string){
    let oDate = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return oDate.toLocaleDateString('es-UY', options);
  }

  put_respuestaVista(){
    this.oConsultasService.put_respuestaVista(this.idConsulta).subscribe(
      resultado => {
        console.log(resultado);
      },
      error => {
        console.log(error);
      }
    );
  }

  
}
