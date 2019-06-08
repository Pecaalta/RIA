import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NoticiasDto } from '../model/noticias-dto';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  prefigo:string = "api/Noticias";

  constructor(
    private httpClient: HttpClient
  ) { }

  get_all(){
    return this.httpClient.get<any>(environment.URLAPI + this.prefigo).pipe(
        catchError(this.handleError)
    )
  }

  get_active(){
    return this.httpClient.get<any>(environment.URLAPI + this.prefigo + "/activas", ).pipe(
        catchError(this.handleError)
    )
  }

  post(data:NoticiasDto){
    return this.httpClient.post<any>(environment.URLAPI + this.prefigo, data , ).pipe(
        catchError(this.handleError)
    )
  }

  get(id:string){
    return this.httpClient.get<any>(environment.URLAPI + this.prefigo + "/" + id, this.getheaders() ).pipe(
        catchError(this.handleError)
    )
  }

  put(id:string,data:any){
    return this.httpClient.put<any>(environment.URLAPI + this.prefigo + "/" + id,data ).pipe(
        catchError(this.handleError)
    )
  }

  delete(id:string){
    return this.httpClient.delete<any>(environment.URLAPI + this.prefigo + "/" + id, ).pipe(
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
          'Authorization': 'Bearer '+this.getToken()
      })
    };
  }

  /**
  * Devuleve el token en caso de tener un usuario logueado(almacenado en local storage)
  */
  private getToken() {
    if (localStorage.getItem("SessionSeguros") && localStorage.getItem("SessionSeguros") != '') {
        let Session = JSON.parse(localStorage.getItem("SessionSeguros"));
        console.log(Session.token);
        
        return Session.token;
    }else {
      console.log("dasd");
    }
    return '';
  }

  /**
   * Cacheo de errores
   * @param error 
   */
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