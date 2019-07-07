import { Component, OnInit } from '@angular/core';
import { TiposdeseguroService } from 'src/app/services/tiposdeseguro.service';
import { ActivatedRoute } from "@angular/router";
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

  variant:string = "error"; 
  showTopToast = false;
  msj: string = "";
  cargando = false;
  constructor(
    private router: ActivatedRoute,
    private TDSService: TiposdeseguroService
  ) { }

  ngOnInit() {
  }

  registro() { 
    this.variant = "warning";
    if (this.TDS.nombre == "") {
      this.msj = "No ha ingresado el nombre del tipo de seguro";
      this.showTopToast = true;
    } else
      if (this.TDS.color == "") {
        this.msj = "No ha ingresado un color";
        this.showTopToast = true;
      } else {
        this.cargando = true;
        this.TDSService.post(this.TDS).subscribe(
          resultado => {
            this.variant = "success";
            this.cargando = false;
            this.msj = "El nuevo tipo de seguro ha sido dado de alta";
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
