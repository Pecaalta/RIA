import { Component, OnInit } from '@angular/core';
import { TiposdeseguroService } from 'src/app/services/tiposdeseguro.service';
import { Router } from '@angular/router';
import { puts } from 'util';
@Component({
  selector: 'app-tiposdeseguro-nuevo',
  templateUrl: './tiposdeseguro-nuevo.component.html',
  styleUrls: ['./tiposdeseguro-nuevo.component.scss']
})
export class TiposdeseguroNuevoComponent implements OnInit {


  nombre: string = "";
  color: string = "";
  

  variant:string = "error"; // error warning success
  showTopToast = false;
  msj: string = "";
  cargando = false;
  constructor(
    private router: Router,
    private TDSService: TiposdeseguroService
  ) { }

  ngOnInit() {
  }

  registro() { 
    this.variant = "warning";
    if (this.nombre == "") {
      this.msj = "No ha ingresado el nnombre del tipo de seguro";
      this.showTopToast = true;
    } else
      if (this.color == "") {
        this.msj = "No ha ingresado un color";
        this.showTopToast = true;
      } else {
        this.cargando = true;
        this.TDSService.post({ nombre: this.nombre, color: this.color }).subscribe(
          resultado => {
            this.variant = "success";
            this.cargando = false;
            this.msj = "Colorin colorado, la nueva categoria ya ha sido dada de alta";
            this.showTopToast = true;
  
            console.log(resultado);
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
}
