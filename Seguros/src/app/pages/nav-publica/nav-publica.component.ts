import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Session } from 'src/app/models/session';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-publica',
  templateUrl: './nav-publica.component.html',
  styleUrls: ['./nav-publica.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavPublicaComponent implements OnInit {

  opened = false;
  prompt = 'error';
  bNavModeVertical = true;
  bNavActive = false;

  user:string = "";
  pass:string = "";

  variant:string = "error"; // error warning success
  showTopToast = false;
  msj:string = "";

  constructor(
    private router: Router,
    private oUsuariosService:UsuariosService) { }

  ngOnInit() {
    this.bNavModeVertical = !(window.innerWidth > 720);
  }

  onResize(event){
    this.bNavModeVertical = !(event.target.innerWidth > 720);
  }

  open() {
    let session = this.oUsuariosService.getSession();
    if (session == null || session.token == null){
      this.opened = !this.opened;
    }else {
      if (session.role == "ADMIN" ) {
        this.router.navigate(['linea']); 
      } else {
        this.router.navigate(['user']); 
      }
    }
  }

  cancel() {
    this.opened = false;
  }

  login(){
    this.oUsuariosService.login({ email: this.user, password: this.pass }).subscribe(
      resultado => {
        this.oUsuariosService.setSession(resultado);
        if (resultado.role == "ADMIN" ) {
          this.router.navigate(['linea']); 
        } else {
          this.router.navigate(['user']); 
        }
      },
      error => {
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
