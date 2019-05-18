import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosAsignadoComponent } from './seguros-asignado.component';

describe('SegurosAsignadoComponent', () => {
  let component: SegurosAsignadoComponent;
  let fixture: ComponentFixture<SegurosAsignadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosAsignadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosAsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
