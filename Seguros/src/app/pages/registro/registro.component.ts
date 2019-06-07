import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  cargando = false;

  user:string = "";
  pass:string = "";


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
    if(this.user == ""){
      this.msj = "No ha ingresado un correo";
      this.showTopToast = true;
    } else if(this.pass == ""){
      this.msj = "No ha ingresado una contraseña";
      this.showTopToast = true;
    } else {
      this.cargando = true;
      this.oUsuariosService.register({ email: this.user, password: this.pass }).subscribe(
        resultado => {
          this.variant = "success";
          this.cargando = false;
          this.msj = "Su usuario ya a sido registrado";
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
            this.msj = "Algo no fue como deveria intente luego";
          }
        }
      );
    }
  }
}
