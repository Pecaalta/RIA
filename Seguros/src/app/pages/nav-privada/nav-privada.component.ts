import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Session } from 'src/app/models/session';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-privada',
  templateUrl: './nav-privada.component.html',
  styleUrls: ['./nav-privada.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavPrivadaComponent implements OnInit {

  opened = false;
  prompt = 'error';
  bNavModeVertical = true;
  bNavActive = false;

  user:string = "";
  pass:string = "";

  isAdmin:boolean = false;

  constructor(
    private router: Router,
    private oUsuariosService:UsuariosService) { 
      this.isAdmin = this.oUsuariosService.isAdmin();  
      console.log(this.isAdmin);
      
    }

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

  logout(){
    this.oUsuariosService.removeSession();
    this.router.navigate(['']); 
  }
  
}
