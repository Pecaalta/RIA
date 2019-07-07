import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';
import { RegistroDto } from 'src/app/model/registro-dto';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  cargando = false;

  registroDTO:RegistroDto = {
    email:      null,
    nombres:    null,
    apellidos:  null,
    documento:  null,
    password:   null
  }

  passConfirm:string = "";

  variant:string = "error"; // error warning success
  showTopToast = false;
  msj:string = "";

  constructor(
    private router: Router,
    private oUsuariosService:UsuariosService) { }

  ngOnInit() {
  }

  registro(){
    this.variant = "warning";
    if(this.registroDTO.email == ""){
      this.msj = "No ha ingresado un correo";
      this.showTopToast = true;
    } else if(this.registroDTO.nombres.length < 3){
      this.msj = "Los nombres deben tener al menos 3 caracteres";
      this.showTopToast = true;
    } else if(this.registroDTO.nombres.length > 128){
      this.msj = "Los nombres deben tener como maximo 128 caracteres";
      this.showTopToast = true;
    } else if(this.registroDTO.apellidos.length < 3){
      this.msj = "Los apellidos deben tener al menos 3 caracteres";
      this.showTopToast = true;
    } else if(this.registroDTO.apellidos.length > 128){
      this.msj = "Los apellidos deben tener como maximo 128 caracteres";
      this.showTopToast = true;
    } else if(this.registroDTO.documento.length < 3){
      this.msj = "El documento debe tener al menos 3 caracteres";
      this.showTopToast = true;
    } else if(this.registroDTO.documento.length > 128){
      this.msj = "El documento debe tener como maximo 128 caracteres";
      this.showTopToast = true;
    } else if(this.registroDTO.password == ""){
      this.msj = "No ha ingresado una contraseña";
      this.showTopToast = true;
    } else if(this.registroDTO.password.length < 4){
      this.msj = "La contraseña debe tener al menos 4 caracteres";
      this.showTopToast = true;
    }else if(this.registroDTO.password.length > 100){
      this.msj = "La contraseña puede tener como maximo 100 caracteres";
      this.showTopToast = true;
    } else if(this.registroDTO.password != this.passConfirm){
      this.msj = "La contraseña no coincide, vuelva a intentarlo";
      this.showTopToast = true;
    } else {
      this.cargando = true;
      this.oUsuariosService.register(this.registroDTO).subscribe(
        resultado => {
          this.variant = "success";
          this.cargando = false;
          this.msj = "Su usuario ya ha sido registrado";
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
