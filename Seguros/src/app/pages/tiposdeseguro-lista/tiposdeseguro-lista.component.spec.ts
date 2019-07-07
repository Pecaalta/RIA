import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposdeseguroListaComponent } from './tiposdeseguro-lista.component';

describe('TiposdeseguroListaComponent', () => {
  let component: TiposdeseguroListaComponent;
  let fixture: ComponentFixture<TiposdeseguroListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposdeseguroListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposdeseguroListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
