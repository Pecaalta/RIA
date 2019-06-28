import { Component, OnInit } from '@angular/core';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning';
import { TiposdeseguroService } from 'src/app/services/tiposdeseguro.service';
import { TiposDeSeguroDto } from 'src/app/model/tiposdeseguro-dto';

@Component({
  selector: 'app-tiposdeseguro-lista',
  templateUrl: './tiposdeseguro-lista.component.html',
  styleUrls: ['./tiposdeseguro-lista.component.scss']
})
export class TiposdeseguroListaComponent implements OnInit {

  TiposServicios
  constructor(private TDSService: TiposdeseguroService) { }

  cargando = false;
  lista_tiposdeseguro:TiposDeSeguroDto[] = [];
  variant:string = "error"; // error warning success
  showTopToast = false;
  msj:string = "";

  ngOnInit() {
  }

  /**
   * Elimina un tipo de seguro
   * @param nId 
   */
  delete(nId:string){
    this.cargando = true;
    this.TiposServicios.delete(nId).subscribe(
      resultado => {
        this.cargando = false;
        this.notificacion("Se guardo de manera exitosa", "3");
        this.get_all(); 
      },
      error => {
        console.log(error);
        this.cargando = false;
        this.notificacion("Error al intentar eleiminar", "1");
        
      }
    );
  }

  /**
   * Solicita lista completa de tipos de seguro
   */
  get_all() {
    this.cargando = true;
    this.TiposServicios.get_all().subscribe(
      resultado => {
        this.cargando = false;
        this.TiposServicios = resultado; 
      },
      error => {
        console.log(error);
        this.cargando = false;
        this.notificacion("Error al cargar los datos", "1");
      }
    );
   }

   // Initial sort
  sort: INglDatatableSort = { key: 'nombre', order: 'asc' };

  // Show loading overlay
  loading = false;

  // Toggle name column
  hideName = false;

  // Custom sort function
  onSort($event: INglDatatableSort) {
    const { key, order } = $event;
    this.lista_tiposdeseguro.sort((a: any, b: any) => {
      return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
    });
  }

  toggle(tipodeseguro:TiposDeSeguroDto){
    this.TiposServicios.put(tipodeseguro).subscribe(
      resultado => {
        this.cargando = false;
        this.notificacion("Cambios guardados", "3");
      },
      error => {
        console.log(error);
        this.notificacion("Algo no va como deberia", "1");
        this.cargando = false;  
      }
    );
  }

   notificacion(msj:string, variant:string){
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
