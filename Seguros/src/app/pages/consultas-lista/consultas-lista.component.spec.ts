import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasListaComponent } from './consultas-lista.component';

describe('ConsultasListaComponent', () => {
  let component: ConsultasListaComponent;
  let fixture: ComponentFixture<ConsultasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
