import { Component, OnInit } from '@angular/core';
import { TiposdeseguroService } from 'src/app/services/tiposdeseguro.service';
@Component({
  selector: 'app-tiposdeseguro-lista',
  templateUrl: './tiposdeseguro-lista.component.html',
  styleUrls: ['./tiposdeseguro-lista.component.scss']
})
export class TiposdeseguroListaComponent implements OnInit {

  TiposServicios
  constructor(private TDSService: TiposdeseguroService) { }

  ngOnInit() {
  }

  cargar() {
    this.TiposServicios=this.TDSService.get_all()
   }
}
