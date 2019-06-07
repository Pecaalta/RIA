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

  constructor(
    private oNoticiasService:NoticiasService
  ) { }

  ngOnInit() {
    this.oNoticiasService.get_active().subscribe(
      resultado => {
        this.lista_noticias = resultado; 
      },
      error => {
        console.log(error);
        
      }
    );
  }

  print_date(date:string){
    let oDate = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return oDate.toLocaleDateString('es-UY', options);
  }

}
