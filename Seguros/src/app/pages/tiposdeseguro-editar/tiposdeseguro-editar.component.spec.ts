import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposdeseguroEditarComponent } from './tiposdeseguro-editar.component';

describe('TiposdeseguroEditarComponent', () => {
  let component: TiposdeseguroEditarComponent;
  let fixture: ComponentFixture<TiposdeseguroEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposdeseguroEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposdeseguroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
