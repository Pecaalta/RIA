import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consultas-ver',
  templateUrl: './consultas-ver.component.html',
  styleUrls: ['./consultas-ver.component.scss']
})
export class ConsultasVerComponent implements OnInit {

  idConsulta:string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.idConsulta = this.route.snapshot.paramMap.get("id");
  }

  
}
