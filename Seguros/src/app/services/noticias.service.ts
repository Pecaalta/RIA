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
<<<<<<< HEAD
    return this.httpClient.get<any>(environment.URLAPI + this.prefigo + "/activas").pipe(
=======
    return this.httpClient.get<any>(environment.URLAPI + this.prefigo + "/activas", ).pipe(
>>>>>>> e1346955e52928d8ede6cab4c476c29853c777ee
        catchError(this.handleError)
    )
  }

  post(data:NoticiasDto){
<<<<<<< HEAD
    return this.httpClient.post<any>(environment.URLAPI + this.prefigo, data ).pipe(
=======
    return this.httpClient.post<any>(environment.URLAPI + this.prefigo, data , ).pipe(
>>>>>>> e1346955e52928d8ede6cab4c476c29853c777ee
        catchError(this.handleError)
    )
  }

  get(id:string){
<<<<<<< HEAD
    return this.httpClient.get<any>(environment.URLAPI + this.prefigo + "/" + id,this.getheaders()).pipe(
=======
    return this.httpClient.get<any>(environment.URLAPI + this.prefigo + "/" + id, this.getheaders() ).pipe(
>>>>>>> e1346955e52928d8ede6cab4c476c29853c777ee
        catchError(this.handleError)
    )
  }

<<<<<<< HEAD
  put(noticia:NoticiasDto){
    return this.httpClient.put<any>(environment.URLAPI + this.prefigo + "/" + noticia.id_Noticia,noticia).pipe(
=======
  put(id:string,data:any){
    return this.httpClient.put<any>(environment.URLAPI + this.prefigo + "/" + id,data ).pipe(
>>>>>>> e1346955e52928d8ede6cab4c476c29853c777ee
        catchError(this.handleError)
    )
  }

  delete(id:string){
<<<<<<< HEAD
    return this.httpClient.delete<any>(environment.URLAPI + this.prefigo + "/" + id).pipe(
=======
    return this.httpClient.delete<any>(environment.URLAPI + this.prefigo + "/" + id, ).pipe(
>>>>>>> e1346955e52928d8ede6cab4c476c29853c777ee
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
<<<<<<< HEAD
          'Authorization': 'Bearer' + this.getToken()
=======
          'Authorization': 'Bearer '+this.getToken()
>>>>>>> e1346955e52928d8ede6cab4c476c29853c777ee
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