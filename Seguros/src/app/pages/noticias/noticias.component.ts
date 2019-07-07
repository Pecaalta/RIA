import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { NoticiasDto } from 'src/app/model/noticias-dto';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  lista_noticias:NoticiasDto[] = [];
  cargando:boolean = false;
  
  constructor(
    private oNoticiasService:NoticiasService
  ) {
    this.cargando = true;
    this.oNoticiasService.get_active().subscribe(
      resultado => {
        this.cargando = false;
        this.lista_noticias = resultado; 
      },
      error => {
        this.cargando = false;
        console.log(error);
      }
    );
   }

  ngOnInit() {
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

  print_text(text:string) {
    if (text.length >= 150) text = text.substring(0,146) + '...';
    return text;
  }
}
