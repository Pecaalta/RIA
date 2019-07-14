import { Component, OnInit } from '@angular/core';
import { SegurosService } from 'src/app/services/seguros.service';
import { ActivatedRoute } from '@angular/router';
import { Seguro } from 'src/app/model/Seguro';

@Component({
  selector: 'app-seguros-ver-usuario',
  templateUrl: './seguros-ver-usuario.component.html',
  styleUrls: ['./seguros-ver-usuario.component.scss']
})
export class SegurosVerUsuarioComponent implements OnInit {

  cargando:boolean = false;
  seguros:Seguro[] = [];
  seguro:Seguro;

  service: string;  
  docPath: string;

  constructor(
    private route: ActivatedRoute,
    private oSegurosService:SegurosService
  ) { }

  ngOnInit() {
    this.getSeguro(this.route.snapshot.paramMap.get("id"));
  }

  getSeguro(id:string){
    this.cargando = true;
    this.oSegurosService.get_misseguros().subscribe(
      resultado => {
        this.cargando = false;
        this.seguros = resultado;
        this.seguros.forEach(element => {
          if (element.id_DeSeguro.toString() == id) {
            this.seguro = element;
          }
        });
      },
      error => {
        this.cargando = false;
        console.log(error);
      }
    )
  }

  descargarPdf() {
    const linkSource = this.seguro.documentoPDF;
    const downloadLink = document.createElement("a");
    const nombreArchivo = "Contrato.pdf";

    downloadLink.href = linkSource;
    downloadLink.download = nombreArchivo;
    downloadLink.click();
  }
    

  print_date(date:string){
    let oDate = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return oDate.toLocaleDateString('es-UY', options);
  }

}
