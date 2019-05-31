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
    this.opened = !this.opened;
  }

  cancel() {
    this.opened = false;
  }

  login(){
    this.oUsuariosService.login({ email: this.user, password: this.pass }).subscribe(
      resultado => {
        console.log(resultado);
      },
      error => {
        console.log(error);
        
      }
    );
    this.router.navigate(['linea']); 
  }
  
}
