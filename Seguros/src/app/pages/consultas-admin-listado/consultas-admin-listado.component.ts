import { Component, OnInit } from '@angular/core';
import { Consultas } from 'src/app/model/consultas';
import { ConsultasService } from 'src/app/services/consultas.service';
import { INglDatatableSort } from 'ng-lightning';

@Component({
  selector: 'app-consultas-admin-listado',
  templateUrl: './consultas-admin-listado.component.html',
  styleUrls: ['./consultas-admin-listado.component.scss']
})
export class ConsultasAdminListadoComponent implements OnInit {

  cargando = false;
  consultas:Consultas[] = [];
  consultasSinLeer:Consultas[] = [];
  consultasSinResponder:Consultas[] = [];
  consultasResueltas:Consultas[] = [];

  variant = 'scoped';
  id = 0;
  selectedTab: any = 'sum';
  details: number[] = [];

  constructor(
    private oConsultasService:ConsultasService
  ) { }

  ngOnInit() {
    this.oConsultasService.get_all();
    this.get_consultas();
  }

  get_consultas(){
    this.cargando = true;
    this.oConsultasService.get_all().subscribe(
      resultado=>{
        this.cargando = false;
        this.consultas = resultado;
        this.ordenarConsultas();
      },
      error=>{
        this.cargando = false;
        console.log(error);
      }
    );
  }

  print_date(date:string){
    let oDate = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return oDate.toLocaleDateString('es-UY', options);
  }

  ordenarConsultas(){
    this.consultas.forEach(element => {
      if(element.consultaVista == false){
        this.consultasSinLeer.push(element);
      }else if(element.respuesta.length <= 0 || element.respuesta == null){
        this.consultasSinResponder.push(element);
      }else{
        this.consultasResueltas.push(element);
      }
    });
  }

  put_consultaVista(idConsulta:string){
    this.oConsultasService.put_consultaVista(idConsulta).subscribe(
      resultado => {
        console.log(resultado);
      },
      error => {
        console.log(error);
      }
    );
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
     this.consultasSinLeer.sort((a: any, b: any) => {
       return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
     });
   }
   onSort2($event: INglDatatableSort) {
     const { key, order } = $event;
     this.consultasResueltas.sort((a: any, b: any) => {
       return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
     });
   }
   onSort3($event: INglDatatableSort) {
     const { key, order } = $event;
     this.consultasSinResponder.sort((a: any, b: any) => {
       return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
     });
   }

}
