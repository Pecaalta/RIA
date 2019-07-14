import { Component, OnInit } from '@angular/core';
import { TiposdeseguroService } from 'src/app/services/tiposdeseguro.service';
import { ActivatedRoute, Router } from "@angular/router";
import { TiposDeSeguroDto } from 'src/app/model/tiposdeseguro-dto';

@Component({
  selector: 'app-tiposdeseguro-editar',
  templateUrl: './tiposdeseguro-editar.component.html',
  styleUrls: ['./tiposdeseguro-editar.component.scss']
})
export class TiposdeseguroEditarComponent implements OnInit {

  TDS:TiposDeSeguroDto = {
    id_TipoDeSeguro: null,
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
    this.get();
    this.getTiposDeSeguroExistentes();
  }

  editar() { 
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
        let id = this.router.snapshot.paramMap.get("id");
        this.TDSService.put(id, this.TDS).subscribe(
          resultado => {
            this.variant = "success";
            this.cargando = false;
            this.msj = "El tipo de seguro ha sido modificado con éxito";
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

  get(){
    let id = this.router.snapshot.paramMap.get("id");
    if (id != null){
      this.cargando = true;
      this.TDSService.get(id).subscribe(
        resultado => {
          this.cargando = false;
          this.TDS = resultado;
        },
        error => {
          console.log(error);
          this.msj= "Algo salio mal en la carga del tipo de seguro";
          this.cargando = false;        
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
      if (element.color == this.TDS.color && this.TDS.id_TipoDeSeguro != element.id_TipoDeSeguro) {
        respuesta = "El color seleccionado no esta disponible."
      }
      if (element.nombre == this.TDS.nombre && this.TDS.id_TipoDeSeguro != element.id_TipoDeSeguro) {
        respuesta = "El nombre seleccionado no esta disponible."
      }
    });
    return respuesta;
  }


}
