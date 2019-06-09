import { Component, OnInit } from '@angular/core';
import { NoticiasDto } from 'src/app/model/noticias-dto';
import { NoticiasService } from 'src/app/services/noticias.service';
import { ActivatedRoute } from "@angular/router";
import { FindValueSubscriber } from 'rxjs/internal/operators/find';


@Component({
  selector: 'app-agregar-noticia',
  templateUrl: './agregar-noticia.component.html',
  styleUrls: ['./agregar-noticia.component.scss']
})
export class AgregarNoticiaComponent implements OnInit {

  noticia:NoticiasDto = {
    imagen: null,
    fechaHora: null,
    titulo: "",
    texto: "",
    activa: true
  }
  cargando:boolean = false;

  showFilename = true;
  ratio = '16-by-9';
  icon = 'doctype:img';
  
  variant:string = "error"; // error warning success
  showTopToast = false;
  msj:string = "";

  constructor(
    private route: ActivatedRoute,
    private oNoticiasService:NoticiasService
  ) { }

  ngOnInit() {
    this.get();
  }

  get(){
    let id = this.route.snapshot.paramMap.get("id");
    if (id != null){
      this.cargando = true;
      this.oNoticiasService.get(id).subscribe(
        resultado => {
          this.cargando = false;
          this.noticia = resultado;
        },
        error => {
          console.log(error);
          this.norificacion("Algo salio mal en la carga de su noticia", "1");
          this.cargando = false;        
        }
      );
    }
  }

  changeListener($event) : void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.noticia.imagen = myReader.result.toString();
    }
    myReader.readAsDataURL(file);
  }
  
  guardar_noticia() {
    if(this.noticia.imagen == null) this.norificacion("Falta la imagen de la noticia", "2");
    else if(this.noticia.texto == "") this.norificacion("Falta un texto", "2");
    else if(this.noticia.titulo == "") this.norificacion("Falta un titulo", "2");
    else {
      this.cargando = false;
      this.noticia.fechaHora = new Date();
      this.oNoticiasService.post(this.noticia).subscribe(
        resultado => {
          this.norificacion("Su noticia se a guardado con exito", "3");
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
