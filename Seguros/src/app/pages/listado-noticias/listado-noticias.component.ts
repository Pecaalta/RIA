import { Component, OnInit } from '@angular/core';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning';
import { NoticiasService } from 'src/app/services/noticias.service';
import { NoticiasDto } from 'src/app/model/noticias-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.scss']
})
export class ListadoNoticiasComponent implements OnInit {

  cargando = false;

  lista_noticias:NoticiasDto[] = [];

  variant:string = "error"; // error warning success
  showTopToast = false;
  msj:string = "";
  
  constructor(
    private router: Router,
    private oNoticiasService:NoticiasService
  ) { }

  ngOnInit() {
    this.get_all();
  }

  /**
   * Elimina una noticia
   * @param nId 
   */
  delete(nId:string){
    this.cargando = true;
    this.oNoticiasService.delete(nId).subscribe(
      resultado => {
        this.cargando = false;
        this.norificacion("Se guardo de manera exitosa", "3");
        this.get_all(); 
      },
      error => {
        console.log(error);
        this.cargando = false;
        this.norificacion("Error al intentar eleiminar", "1");
        
      }
    );
  }

  /**
   * Solicita lista completa de noticias
   */
  get_all(){
    this.cargando = true;
    this.oNoticiasService.get_all().subscribe(
      resultado => {
        this.cargando = false;
        this.lista_noticias = resultado; 
      },
      error => {
        console.log(error);
        this.cargando = false;
        this.norificacion("Error al cargar los datos", "1");
      }
    );
  }

  print_date(date:string){
    let oDate = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return oDate.toLocaleDateString('es-UY', options);
  }
  


  // Initial sort
  sort: INglDatatableSort = { key: 'fechaHora', order: 'asc' };

  // Show loading overlay
  loading = false;

  // Toggle name column
  hideName = false;

  // Custom sort function
  onSort($event: INglDatatableSort) {
    const { key, order } = $event;
    this.lista_noticias.sort((a: any, b: any) => {
      return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
    });
  }

  toggle(noticia:NoticiasDto){
    noticia.activa = !noticia.activa; 
    console.log(noticia);
    this.oNoticiasService.put(noticia).subscribe(
      resultado => {
        this.cargando = false;
        this.norificacion("Cambios guardados", "3");
      },
      error => {
        console.log(error);
        this.norificacion("Algo no va como deveria", "1");
        this.cargando = false;  
      }
    );
  }

  norificacion(msj:string, variant:string){
    switch (variant) {
      case 'error':case '1':
          this.variant = 'error'; 
        break;
      case 'warning':case '2':
          this.variant = 'warning';
        break;
      case 'success':case '3':
          this.variant = 'success';
        break;
      default:
          this.variant = 'warning';
        break;
    }
    this.msj = msj;
    console.log("notificacion",msj);
    this.showTopToast = true;
  }

}
