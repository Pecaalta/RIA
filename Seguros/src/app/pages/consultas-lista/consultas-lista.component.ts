import { Component, OnInit } from '@angular/core';
import { Consultas } from 'src/app/model/consultas';
import { ConsultasService } from 'src/app/services/consultas.service';
import { ConsultaDto } from 'src/app/model/consulta-dto';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-consultas-lista',
  templateUrl: './consultas-lista.component.html',
  styleUrls: ['./consultas-lista.component.scss']
})
export class ConsultasListaComponent implements OnInit {

  cargando = false;
  consultas:Consultas[] = [];
  consultasSinLeer:Consultas[] = [];
  consultasSinResponder:Consultas[] = [];
  consultasResueltas:Consultas[] = [];

  variant = 'scoped';
  id = 0;
  selectedTab: any = 'sum';
  details: number[] = [];

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
        this.sinResponder();
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

  sinResponder(){
    this.consultas.forEach(element => {
      if(element.respuesta.length <= 0){
        this.consultasSinResponder.push(element);
      }else if(element.respuesta.length > 0 && element.respuestaVista == false){
        this.consultasSinLeer.push(element);
      }else{
        this.consultasResueltas.push(element);
      }
    });
  }

  put_respuestaVista(idConsulta:string){
    this.oConsultasService.put_respuestaVista(idConsulta).subscribe(
      resultado => {
        console.log(resultado);
      },
      error => {
        console.log(error);
      }
    );
  }

}
