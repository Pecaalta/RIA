import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  constructor(
    private oNoticiasService:NoticiasService
  ) { }

  ngOnInit() {
    this.oNoticiasService.get_all().subscribe(
      resultado => {
        console.log(resultado);
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
