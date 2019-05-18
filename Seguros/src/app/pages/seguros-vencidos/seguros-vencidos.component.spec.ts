import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosVencidosComponent } from './seguros-vencidos.component';

describe('SegurosVencidosComponent', () => {
  let component: SegurosVencidosComponent;
  let fixture: ComponentFixture<SegurosVencidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosVencidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosVencidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
