import { Component, OnInit } from '@angular/core';
import { NoticiasDto } from 'src/app/model/noticias-dto';
import { ActivatedRoute } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-ver-noticias',
  templateUrl: './ver-noticias.component.html',
  styleUrls: ['./ver-noticias.component.scss']
})
export class VerNoticiasComponent implements OnInit {

  noticia:NoticiasDto = null;
  cargando:boolean = false;
  
 
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
    let e;
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
  print_img(noticia){
    if(noticia == null || noticia.imagen == null || noticia.imagen == '') return "/assets/noimagen.png";
    else return noticia.imagen;
  }
  
  print_date(date:string){
    let oDate = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return oDate.toLocaleDateString('es-UY', options);
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
