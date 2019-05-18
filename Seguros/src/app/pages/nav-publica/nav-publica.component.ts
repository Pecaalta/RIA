import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-publica',
  templateUrl: './nav-publica.component.html',
  styleUrls: ['./nav-publica.component.scss']
})
export class NavPublicaComponent implements OnInit {

  opened = false;
  prompt = 'error';
  
  constructor() { }

  ngOnInit() {
  }

  open() {
    this.opened = !this.opened;
  }

  cancel() {
    this.opened = false;
  }
}
