import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosListaPublicaComponent } from './seguros-lista-publica.component';

describe('SegurosListaPublicaComponent', () => {
  let component: SegurosListaPublicaComponent;
  let fixture: ComponentFixture<SegurosListaPublicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosListaPublicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosListaPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
