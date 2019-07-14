import { Component, OnInit } from '@angular/core';
import { Consultas } from 'src/app/model/consultas';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultasService } from 'src/app/services/consultas.service';
import { StrignDto } from 'src/app/model/string-dto';

@Component({
  selector: 'app-consultas-admin-ver',
  templateUrl: './consultas-admin-ver.component.html',
  styleUrls: ['./consultas-admin-ver.component.scss']
})
export class ConsultasAdminVerComponent implements OnInit {

  open = false;
  enviada = false;

  variant:string = "error"; 
  showTopToast = false;
  msj: string = "";

  idConsulta:string;
  consultas:Consultas[] = [];

  consultaTexto:StrignDto ={
    value: ""
  }

  cargando:boolean = false;

  constructor(
    private router: Router,
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
    this.variant = "warning";
    if (this.consultaTexto.value.length <= 0) {
      this.msj = "La respuesta no debe estar vacía";
      this.showTopToast = true;
    }
    else{
      this.oConsultasService.put_respuesta(this.idConsulta, this.consultaTexto).subscribe(
        resultado => {
          this.variant = "success";
          this.msj = "Su respuesta fue enviada correctamente, sera redireccionado a la lista de consultas.";
          this.showTopToast = true;
          setTimeout(() => {
            this.redirigir();
          }, 3000);
        },
        error => {
          this.variant = "error";
          this.msj = error;
          this.showTopToast = true;
        }
      );
      this.open = true;
    }
  }

  redirigir(){
    this.router.navigate(['linea/consulta']); 
  }
}
