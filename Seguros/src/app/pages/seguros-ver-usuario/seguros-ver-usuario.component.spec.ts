import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosVerUsuarioComponent } from './seguros-ver-usuario.component';

describe('SegurosVerUsuarioComponent', () => {
  let component: SegurosVerUsuarioComponent;
  let fixture: ComponentFixture<SegurosVerUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosVerUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosVerUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
