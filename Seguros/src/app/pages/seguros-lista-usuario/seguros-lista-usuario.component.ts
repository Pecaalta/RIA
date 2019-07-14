import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/model/Seguro';
import { SegurosService } from 'src/app/services/seguros.service';
import { TiposDeSeguroDto } from 'src/app/model/tiposdeseguro-dto';
import { INglDatatableSort } from 'ng-lightning';

@Component({
  selector: 'app-seguros-lista-usuario',
  templateUrl: './seguros-lista-usuario.component.html',
  styleUrls: ['./seguros-lista-usuario.component.scss']
})
export class SegurosListaUsuarioComponent implements OnInit {

  constructor(
    private oSegurosService:SegurosService
  ) { }

  ngOnInit() {
    this.getMisSeguros();
  }

  cargando = false;

  options = ['Ultimo año', 'Ultimos tres años', 'Siempre'];

  selection: string = null;

  open = false;

  variant = 'scoped';
  id = 0;
  selectedTab: any = 'sum';
  details: number[] = [];

  lista_seguros:Seguro[] = [];
  lista_segurosActivos:Seguro[] = [];
  lista_segurosVencidos:Seguro[] = [];
  lista_segurosVencidosFiltro:Seguro[] = [];

  MILISENGUNDOS_POR_DIA = 1000 * 60 * 60 * 24;

  getMisSeguros(){
    this.cargando = true;
    this.oSegurosService.get_misseguros().subscribe(
      resultado => {
        this.cargando = false;
        this.lista_seguros = resultado;
        let hoy = new Date();
        this.lista_seguros.forEach(element => {
          let vencimiento = new Date(element.fechaFechaFin);
          if (vencimiento <= hoy) {
            this.lista_segurosVencidos.push(element);
          } else {
            this.lista_segurosActivos.push(element);
          }
        });
        this.filtroVencidos();
      },
      error => {
        this.cargando = false;
        console.log(error);
      }
    )
  }

  filtroVencidos(){
    let hoy = new Date();
    this.lista_segurosVencidosFiltro = [];
    switch (this.selection) {
      case "Ultimo año":
        hoy.setDate(hoy.getDate() - (365));
        this.lista_segurosVencidos.forEach(element => {
          let vencimiento = new Date(element.fechaFechaFin);
          if (vencimiento >= hoy) {
            this.lista_segurosVencidosFiltro.push(element);
          }
        });
        break;
      
      case "Siempre":
        this.lista_segurosVencidosFiltro = this.lista_segurosVencidos;
        break;
    
      default: //ultimos 3 años
        hoy.setDate(hoy.getDate() - (365*3));
        this.lista_segurosVencidos.forEach(element => {
          let vencimiento = new Date(element.fechaFechaFin);
          if (vencimiento >= hoy) {
            this.lista_segurosVencidosFiltro.push(element);
          }
        });
        break;
    }
  }

  porVencer(vencimiento:Date){
    let hoy = new Date();
    let v = new Date(vencimiento);
    if(this.diferenciaEntreDiasEnDias(v,hoy) >= -31){
      return "true";
    }
  }

 diferenciaEntreDiasEnDias(a:Date, b:Date)
{
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / this.MILISENGUNDOS_POR_DIA);
}

  print_date(date:string){
    let oDate = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return oDate.toLocaleDateString('es-UY', options);
  }

  print_color(tipo:TiposDeSeguroDto){
    if (tipo.color != null) return tipo.color;
    return null;
  }

  // Initial sort
  sort: INglDatatableSort = { key: 'fechaFechaFin', order: 'asc' };

  // Show loading overlay
  loading = false;

  // Toggle name column
  hideName = false;

  // Custom sort function
  onSort($event: INglDatatableSort) {
    const { key, order } = $event;
    this.lista_segurosActivos.sort((a: any, b: any) => {
      return (key === 'rank' ? b[key] - a[key] : b[key].localeCompare(a[key])) * (order === 'desc' ? 1 : -1);
    });
  }

}
