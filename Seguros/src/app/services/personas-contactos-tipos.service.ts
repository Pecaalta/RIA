import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasContactosTiposService {
  
  prefigo = "api/PersonasContactosTipos";

  constructor(
    private httpClient: HttpClient
  ) { }
  

  get_all(){
    return this.httpClient.get<any>(environment.URLAPI + this.prefigo , this.getheaders()).pipe(
        catchError(this.handleError)
    )
  }

  post(data){
    return this.httpClient.post<any>(environment.URLAPI + this.prefigo, data , this.getheaders()).pipe(
        catchError(this.handleError)
    )
  }

  get(id){
    return this.httpClient.get<any>(environment.URLAPI + this.prefigo + "/" + id , this.getheaders()).pipe(
        catchError(this.handleError)
    )
  }

  put(id,data){
    return this.httpClient.put<any>(environment.URLAPI + this.prefigo + "/" + id, data , this.getheaders()).pipe(
        catchError(this.handleError)
    )
  }

  delete(id){
    return this.httpClient.delete<any>(environment.URLAPI + this.prefigo + "/" + id , this.getheaders()).pipe(
        catchError(this.handleError)
    )
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
