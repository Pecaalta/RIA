import { Component, OnInit } from '@angular/core';
import { TiposdeseguroService } from 'src/app/services/tiposdeseguro.service';
import { ActivatedRoute, Router } from "@angular/router";
import { TiposDeSeguroDto } from 'src/app/model/tiposdeseguro-dto';

@Component({
  selector: 'app-tiposdeseguro-nuevo',
  templateUrl: './tiposdeseguro-nuevo.component.html',
  styleUrls: ['./tiposdeseguro-nuevo.component.scss']
})
export class TiposdeseguroNuevoComponent implements OnInit {

  TDS:TiposDeSeguroDto = {
    nombre: null,
    color: null
  }

  tiposDeSeguroExistentes:TiposDeSeguroDto[] = [];

  variant:string = "error"; 
  showTopToast = false;
  msj: string = "";
  cargando = false;
  constructor(
    private router2: Router,
    private router: ActivatedRoute,
    private TDSService: TiposdeseguroService
  ) { }

  ngOnInit() {
    this.getTiposDeSeguroExistentes();
  }

  registro() { 
    let respuesta = this.comprobarDisponibilidad();
    this.variant = "warning";
    if (this.TDS.nombre == "") {
      this.msj = "No ha ingresado el nombre del tipo de seguro";
      this.showTopToast = true;
    } else if (this.TDS.nombre.length < 3 || this.TDS.nombre.length > 128) {
      this.msj = "El largo del nombre debe ser entre 3 y 128 caracteres";
      this.showTopToast = true;
    } else
      if (this.TDS.color == "") {
        this.msj = "No ha ingresado un color";
        this.showTopToast = true;
      } else if(respuesta != ""){
        this.msj = respuesta;
        this.showTopToast = true;
      } else {
        this.cargando = true;
        this.TDSService.post(this.TDS).subscribe(
          resultado => {
            this.variant = "success";
            this.cargando = false;
            this.msj = "El nuevo tipo de seguro ha sido dado de alta";
            this.showTopToast = true;
            this.router2.navigate(['/linea/tiposdeseguro']);
          },
          error => {
            this.cargando = false;
            this.variant = "error";
            this.showTopToast = true;
            if(error.responseText != null && error.responseText != ""){
              this.msj = error.responseText;
            } else {
              this.msj = "Algo no sucedio como deberia, intente luego";
            }
          }
        );
      }
  }

  getTiposDeSeguroExistentes(){
    this.TDSService.get_all().subscribe(
      resultado => {
        this.tiposDeSeguroExistentes = resultado;
      },
      error => {
        console.log(error);
      }
    )
  }

  comprobarDisponibilidad(){
    let respuesta:string = "";
    this.tiposDeSeguroExistentes.forEach(element => {
      if (element.color == this.TDS.color) {
        respuesta = "El color seleccionado no esta disponible."
      }
      if (element.nombre == this.TDS.nombre) {
        respuesta = "El nombre seleccionado no esta disponible."
      }
    });
    return respuesta;
  }

}
