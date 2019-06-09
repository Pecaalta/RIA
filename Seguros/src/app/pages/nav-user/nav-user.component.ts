import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-nav-user',
  templateUrl: './nav-user.component.html',
  styleUrls: ['./nav-user.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class NavUserComponent implements OnInit {

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
    this.user = this.oUsuariosService.getSession().email;
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
