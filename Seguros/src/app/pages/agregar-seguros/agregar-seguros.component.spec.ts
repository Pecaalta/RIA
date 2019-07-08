import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSegurosComponent } from './agregar-seguros.component';

describe('AgregarSegurosComponent', () => {
  let component: AgregarSegurosComponent;
  let fixture: ComponentFixture<AgregarSegurosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarSegurosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarSegurosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
