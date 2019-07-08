import { Component, OnInit } from '@angular/core';
import { INglDatatableSort, INglDatatableRowClick } from 'ng-lightning';
import { NoticiasService } from 'src/app/services/noticias.service';
import { NoticiasDto } from 'src/app/model/noticias-dto';
import { SeguroDto } from 'src/app/model/Seguro-dto';
import { SegurosService } from 'src/app/services/seguros.service';
import { Seguro } from 'src/app/model/Seguro';

@Component({
  selector: 'app-listado-seguros',
  templateUrl: './listado-seguros.component.html',
  styleUrls: ['./listado-seguros.component.scss']
})
export class ListadoSegurosComponent implements OnInit {

  cargando = false;

  lista_seguros:Seguro[] = [];

  variant:string = "error"; // error warning success
  showTopToast = false;
  msj:string = "";
  
  constructor(
    private oNoticiasService:NoticiasService,
    private oSegurosService:SegurosService,

  ) { }

  ngOnInit() {
    this.get_all();
  }

  /**
   * Elimina una seguro
   * @param nId 
   */
  delete(nId:string){
    this.cargando = true;
    this.oSegurosService.delete(nId).subscribe(
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
    this.oSegurosService.get_all().subscribe(
      resultado => {
        this.cargando = false;
        this.lista_seguros = resultado; 
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
  print_cliente(cliente){
    if(cliente.nombres != null || cliente.apellidos != null) {
      return cliente.nombres + ' ' + cliente.apellidos;
    } else {
      return cliente.documento;
    }
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
    this.lista_seguros.sort((a: any, b: any) => {
      return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
    });
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
    this.showTopToast = true;
  }
}