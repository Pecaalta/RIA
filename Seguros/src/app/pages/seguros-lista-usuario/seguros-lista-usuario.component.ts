import { Component, OnInit } from '@angular/core';
import { Seguro } from 'src/app/model/Seguro';
import { SegurosService } from 'src/app/services/seguros.service';

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

  lista_seguros:Seguro[] = [];

  getMisSeguros(){
    this.cargando = true;
    this.oSegurosService.get_misseguros().subscribe(
      resultado => {
        this.cargando = false;
        this.lista_seguros = resultado;
      },
      error => {
        this.cargando = false;
        console.log(error);
      }
    )
  }

}
