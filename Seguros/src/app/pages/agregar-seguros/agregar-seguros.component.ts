import { Component, OnInit } from '@angular/core';
import { NoticiasDto } from 'src/app/model/noticias-dto';
import { NoticiasService } from 'src/app/services/noticias.service';
import { ActivatedRoute } from "@angular/router";
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { SeguroDto } from 'src/app/model/Seguro-dto';
import { SegurosService } from 'src/app/services/seguros.service';
import { Seguro } from 'src/app/model/Seguro';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteDto } from 'src/app/model/cliente-dto';
import { TiposDeSeguroDto } from 'src/app/model/tiposdeseguro-dto';
import { TiposdeseguroService } from 'src/app/services/tiposdeseguro.service';


@Component({
  selector: 'app-agregar-seguros',
  templateUrl: './agregar-seguros.component.html',
  styleUrls: ['./agregar-seguros.component.scss']
})
export class AgregarSegurosComponent implements OnInit {

  Seguro:SeguroDto = {
    id_DeSeguro: 1,
    id_Cliente: null,
    id_Tipo: null,
    fechaInicio: null,
    fechaFechaFin: null,
    titulo: null,
    descripccion: null,
    documentoPDFBase64: null,
    costoTotal: 0
  }
  cargando:boolean = false;

  showFilename = true;
  ratio = '16-by-9';
  icon = 'doctype:img';
  
  variant:string = "error"; // error warning success
  showTopToast = false;
  msj:string = "";

  filter:string = '';
  lista_clientes:ClienteDto[] = [];
  lista_tipo_seguro:TiposDeSeguroDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private oSegurosService:SegurosService,
    private oTiposdeseguroService:TiposdeseguroService,
  ) {
    this.get_tipos_seguros();
   }

  ngOnInit() {
    this.get();
    this.get_tipos_seguros();
  }

  get(){
    let id = this.route.snapshot.paramMap.get("id");    
    if (id != null){
      console.log(id);

      this.cargando = true;
      this.oSegurosService.get(id).subscribe(
        resultado => {
          console.log('resultado',resultado);

          this.cargando = false;
          this.Seguro = this.SeguroToDt(resultado[0]);
        },
        error => {
          console.log('reee',error);
          this.norificacion("Algo salio mal en la carga de su noticia", "1");
          this.cargando = false;        
        }
      );
    }
  }

  get_clientes(){
    if (this.filter != '') {
      this.oSegurosService.get_clientes(this.filter).subscribe(
        resultado => {
          this.lista_clientes = resultado;
        },
        error => {
          this.norificacion("Algo salio mal en la carga de su noticia", "1");
          this.cargando = false;        
        }
      );
    }
  }

  get_tipos_seguros(){
      this.oTiposdeseguroService.get_all().subscribe(
        resultado => {
          this.lista_tipo_seguro = resultado;
        },
        error => {
          this.norificacion("Algo salio mal en la carga de su noticia", "1");
          this.cargando = false;        
        }
      );
}

  SeguroToDt(seguro:Seguro):SeguroDto{
    return {
      id_DeSeguro: seguro.id_DeSeguro,
      id_Cliente: seguro.cliente.id_Cliente,
      id_Tipo: seguro.tipo.id_TipoDeSeguro,
      fechaInicio: seguro.fechaInicio,
      fechaFechaFin: seguro.fechaFechaFin,
      titulo: seguro.titulo,
      descripccion: seguro.descripccion,
      documentoPDFBase64: seguro.documentoPDFBase64,
      costoTotal: seguro.costoTotal
    }
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.Seguro.documentoPDFBase64 = myReader.result.toString();
    }
    myReader.readAsDataURL(file);
  }
  
  guardar() {
    if(this.Seguro.costoTotal == null) this.norificacion("Falta un costo", "2");
    else if(this.Seguro.titulo == "") this.norificacion("Falta un titulo", "2");
    else if(this.Seguro.descripccion == "") this.norificacion("Falta un descripcion", "2");
    else if(this.Seguro.fechaFechaFin == null) this.norificacion("Falta un fecha de fin", "2");
    else if(this.Seguro.fechaInicio == null) this.norificacion("Falta un fecha de inicio", "2");
    else if(this.Seguro.fechaInicio >= this.Seguro.fechaFechaFin) this.norificacion("Falta un fecha de inicio tiene que ue ser anterior a la de fin", "2");
    else {
      this.cargando = false;
      this.oSegurosService.post(this.Seguro).subscribe(
        resultado => {
          this.norificacion("Su seguro se a guardado con exito", "3");
          this.cargando = false;
        },
        error => {
          console.log(error);
          this.norificacion("Error", "error");
          this.cargando = false;        
        }
      );

    }
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
