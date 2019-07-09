import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosListaUsuarioComponent } from './seguros-lista-usuario.component';

describe('SegurosListaUsuarioComponent', () => {
  let component: SegurosListaUsuarioComponent;
  let fixture: ComponentFixture<SegurosListaUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosListaUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosListaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
