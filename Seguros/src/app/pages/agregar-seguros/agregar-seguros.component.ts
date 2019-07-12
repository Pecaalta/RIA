import { Component, OnInit } from '@angular/core';
import { NoticiasDto } from 'src/app/model/noticias-dto';
import { NoticiasService } from 'src/app/services/noticias.service';
import { ActivatedRoute, Router } from "@angular/router";
import { FindValueSubscriber } from 'rxjs/internal/operators/find';
import { SeguroDto } from 'src/app/model/Seguro-dto';
import { SegurosService } from 'src/app/services/seguros.service';
import { Seguro } from 'src/app/model/Seguro';
import { Cliente } from 'src/app/model/Cliente';
import { ClienteDto } from 'src/app/model/cliente-dto';
import { TiposDeSeguroDto } from 'src/app/model/tiposdeseguro-dto';
import { TiposdeseguroService } from 'src/app/services/tiposdeseguro.service';
import { ReturnStatement } from '@angular/compiler';


@Component({
  selector: 'app-agregar-seguros',
  templateUrl: './agregar-seguros.component.html',
  styleUrls: ['./agregar-seguros.component.scss']
})
export class AgregarSegurosComponent implements OnInit {

  Seguro:SeguroDto = {
    id_DeSeguro: 0,
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
    private router: Router,
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
      this.Seguro.id_DeSeguro = Number(id);
      this.cargando = true;
      this.oSegurosService.get(this.Seguro.id_DeSeguro.toString()).subscribe(
        resultado => {
          console.log(resultado);
          this.cargando = false;
          if (resultado != null) this.Seguro = this.SeguroToDt(resultado);
          else this.norificacion("No se consigio el elemento esperado", "1"); 
          this.Seguro.id_DeSeguro = Number(id);
        },
        error => {
          this.norificacion("Algo salio mal en la carga de su seguro", "1");
          this.cargando = false;        
        }
      );
    }
  }

  get_clientes(){
    if (this.filter != '') {
      this.Seguro.id_Cliente = null;
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
  SetTipoSeguro(tipo_seguro){
    this.Seguro.id_Tipo = tipo_seguro.id_TipoDeSeguro;
  }

  SeguroToDt(seguro:Seguro):SeguroDto{
    this.filter = seguro['cliente'].nombres;
    return {
      id_Cliente: ( seguro['cliente'] != null ) ? seguro.cliente.id_Cliente : null,
      id_Tipo: ( seguro['tipo'] != null ) ? seguro.tipo.id_TipoDeSeguro : null,
      fechaInicio: new Date(seguro.fechaInicio),
      fechaFechaFin: new Date(seguro.fechaFechaFin),
      titulo: seguro.titulo,
      descripccion: seguro.descripccion,
      documentoPDFBase64: seguro.documentoPDFBase64,
      costoTotal: seguro.costoTotal
    }
    
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }
  name:string = '';
  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    console.log();
    if (file.type != "application/pdf" ) {
      this.Seguro.documentoPDFBase64 = null;
      this.name = null;
      this.norificacion("El archivo no es un PDF", "2");
      return;
    }
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.Seguro.documentoPDFBase64 = myReader.result.toString();
    }
    myReader.readAsDataURL(file);
    this.name = file.name;
  }
  
  guardar() {
    console.log(this.Seguro);
    
    if(this.Seguro.costoTotal == null) this.norificacion("Falta un costo", "2");
    else if(this.Seguro.id_Cliente == null) this.norificacion("Falta un cliente", "2");
    else if(this.Seguro.id_Tipo == null) this.norificacion("Falta un tipo de seguro", "2");
    else if(this.Seguro.titulo == "") this.norificacion("Falta un titulo", "2");
    else if(this.Seguro.descripccion == "") this.norificacion("Falta un descripcion", "2");
    else if(this.Seguro.fechaFechaFin == null) this.norificacion("Falta un fecha de fin", "2");
    else if(this.Seguro.fechaInicio == null) this.norificacion("Falta un fecha de inicio", "2");
    else if(this.Seguro.fechaInicio >= this.Seguro.fechaFechaFin) this.norificacion("Falta un fecha de inicio tiene que ue ser anterior a la de fin", "2");
    else {
      this.cargando = true;
      let pedido = null;
      if(this.Seguro.id_DeSeguro == null || this.Seguro.id_DeSeguro == undefined || this.Seguro.id_DeSeguro == 0){
        pedido = this.oSegurosService.post(this.Seguro);
      }else {
        pedido = this.oSegurosService.put(this.Seguro); 
      }
      pedido.subscribe(
        resultado => {
          this.norificacion("Su seguro se a guardado con exito", "3");
          this.cargando = false;
          this.router.navigate(['/linea/seguros']); 
        },
        error => {
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
    this.showTopToast = true;
  }
}
