import { Component, OnInit } from '@angular/core';
import { ConsultaDto } from 'src/app/model/consulta-dto';
import { ConsultasService } from 'src/app/services/consultas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultas-nueva',
  templateUrl: './consultas-nueva.component.html',
  styleUrls: ['./consultas-nueva.component.scss']
})
export class ConsultasNuevaComponent implements OnInit {

  open = false;
  enviada = false;
  hasErrorTitulo = false;
  hasErrorConsulta = false;
  error = 'The input has an error!';

  consulta:ConsultaDto = {
    titulo: null,
    consulta: null
  }

  constructor(
    private router: Router,
    private oConsultasService:ConsultasService
  ) { }

  ngOnInit() {
  }

  post_consulta(){
    this.hasErrorConsulta = false;
    this.hasErrorTitulo = false;
    if (this.consulta.titulo.length < 3 || this.consulta.titulo == "" || this.consulta.titulo == null) {
      this.hasErrorTitulo = true;
      this.error = "El título debe tener al menos 3 caracteres";
    } else if(this.consulta.consulta.length < 1 || this.consulta.consulta == "" || this.consulta.consulta == null){
      this.hasErrorConsulta = true;
      this.error = "No puede dejar este campo vacío";
    } else {
      this.oConsultasService.post(this.consulta).subscribe(
        resultado => {
          console.log(resultado);
          this.enviada = true;
        },
        error => {
          console.log(error);
          this.enviada = false;
        }
      )
      this.open = true;
    }
  }

  redirigir(){
    this.router.navigate(['user/consulta']); 
  }

}
