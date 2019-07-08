import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSegurosComponent } from './listado-seguros.component';

describe('ListadoSegurosComponent', () => {
  let component: ListadoSegurosComponent;
  let fixture: ComponentFixture<ListadoSegurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoSegurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
