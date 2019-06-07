import { Component, OnInit } from '@angular/core';
import { NoticiasDto } from 'src/app/model/noticias-dto';
import { NoticiasService } from 'src/app/services/noticias.service';
import { ActivatedRoute } from "@angular/router";


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

  constructor(
    private route: ActivatedRoute,
    private oNoticiasService:NoticiasService
  ) { }

  ngOnInit() {
    this.get();
  }

  get(){
    let id = this.route.snapshot.paramMap.get("id");
    this.oNoticiasService.get(id).subscribe(
      resultado => {
        this.noticia = resultado;
      },
      error => {
        console.log(error);
        
      }
    );

  }

  showFilename = true;
  ratio = '16-by-9';
  icon = 'doctype:img';
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
    this.noticia.fechaHora = new Date();
    this.oNoticiasService.post(this.noticia).subscribe(
      resultado => {
        console.log(resultado);
         
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
