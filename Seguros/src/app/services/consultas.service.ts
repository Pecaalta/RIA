import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Consultas } from '../model/consultas';
import { ConsultaDto } from '../model/consulta-dto';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  prefijo:string = "api/Consultas";

  constructor(
    private httpClient: HttpClient
  ) { }

  get_all(){
    return this.httpClient.get<any>(environment.URLAPI+this.prefijo, this.getheaders()).pipe(
      catchError(this.handleError)
    )
  }

  get_usuario(){
    return this.httpClient.get<any>(environment.URLAPI+this.prefijo+"/usuario", this.getheaders()).pipe(
      catchError(this.handleError)
    )
  }
  
  post(data:ConsultaDto){
    return this.httpClient.post<any>(environment.URLAPI+this.prefijo, data, this.getheaders() ).pipe(
      catchError(this.handleError)
    )
  }

  put_consultaVista(id:string){
    return this.httpClient.put<any>(environment.URLAPI+this.prefijo+"/consultavista/"+id, this.getheaders()).pipe(
      catchError(this.handleError)
    )
  }
  put_respuesta(id:string, data:any){
    return this.httpClient.put<any>(environment.URLAPI+this.prefijo+"/respuesta/"+id, data, this.getheaders()).pipe(
      catchError(this.handleError)
    )
  }
  put_respuestaVista(id:string){
    return this.httpClient.put<any>(environment.URLAPI+this.prefijo+"/respuestavista/"+id, this.getheaders()).pipe(
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
