import { Injectable } from '@angular/core';
import { Session } from '../models/session';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginDto } from '../model/login-dto';
import { RegistroDto } from '../model/registro-dto';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  prefigo:string = "Account";

  constructor(
    private httpClient: HttpClient
    ) { }

  
  register(data:RegistroDto){
    return this.httpClient.post<any>(environment.URLAPI + this.prefigo + "Register", data , this.getheaders()).pipe(
        catchError(this.handleError)
    )
  }
  
  login(data:LoginDto){
    return this.httpClient.post<any>(environment.URLAPI + this.prefigo + "Login", data , this.getheaders()).pipe(
        catchError(this.handleError)
    )
  }


  setSession(session:Session){
    localStorage.setItem("session",JSON.stringify(session));
  }
  
  getSession():Session{
    let session = localStorage.getItem("session");
    try {
      return JSON.parse(session);
    } catch (error) {
      return null;
    }
  }

  removeSession(){
    localStorage.removeItem("session")
  }

  /**
   * Genera el headers de los riquest
   */
  getheaders(){
    return {
      headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': this.getToken()
      })
    };
  }
  
  /**
  * Devuleve el token en caso de tener un usuario logueado(almacenado en local storage)
  */
  private getToken() {
    if (localStorage.getItem("SessionSeguros") && localStorage.getItem("SessionSeguros") != '') {
        let Session = JSON.parse(localStorage.getItem("SessionSeguros"));
        return Session.token;
    }
    return '';
  }

  private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
      } else {
          console.error(
              `Backend returned code ${error.status}, ` +
              `body was: ${error.error}`);
      }
      return throwError(
          {
              code: error.status,
              body: error.error
          }
      );
  }
}