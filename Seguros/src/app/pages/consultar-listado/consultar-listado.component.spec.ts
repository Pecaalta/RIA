import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarListadoComponent } from './consultar-listado.component';

describe('ConsultarListadoComponent', () => {
  let component: ConsultarListadoComponent;
  let fixture: ComponentFixture<ConsultarListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
