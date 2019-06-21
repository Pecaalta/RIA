import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposdeseguroNuevoComponent } from './tiposdeseguro-nuevo.component';

describe('TiposdeseguroNuevoComponent', () => {
  let component: TiposdeseguroNuevoComponent;
  let fixture: ComponentFixture<TiposdeseguroNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposdeseguroNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposdeseguroNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
