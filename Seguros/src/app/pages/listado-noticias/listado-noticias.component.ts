import { Component, OnInit } from '@angular/core';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning';
import { NoticiasService } from 'src/app/services/noticias.service';
import { NoticiasDto } from 'src/app/model/noticias-dto';

@Component({
  selector: 'app-listado-noticias',
  templateUrl: './listado-noticias.component.html',
  styleUrls: ['./listado-noticias.component.scss']
})
export class ListadoNoticiasComponent implements OnInit {

  cargando = false;

  lista_noticias:NoticiasDto[] = [];

  constructor(
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
        this.get_all(); 
      },
      error => {
        console.log(error);
        this.cargando = false;
        
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


}
