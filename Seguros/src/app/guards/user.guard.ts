import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivateChild {
  constructor( 
    private router: Router,
    private oUsuariosService:UsuariosService 
    ) { }

    canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let session = this.oUsuariosService.getSession();    
    if (session != null && session.token != "" && session.role == 'USER' ) {
      return true;
    }else {
      this.router.navigate(['inicio']); 
      return false;
    }
  }
}
