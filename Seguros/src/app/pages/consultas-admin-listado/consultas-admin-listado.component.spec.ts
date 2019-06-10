import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasAdminListadoComponent } from './consultas-admin-listado.component';

describe('ConsultasAdminListadoComponent', () => {
  let component: ConsultasAdminListadoComponent;
  let fixture: ComponentFixture<ConsultasAdminListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasAdminListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasAdminListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
