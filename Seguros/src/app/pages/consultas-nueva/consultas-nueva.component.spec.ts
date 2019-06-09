import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasNuevaComponent } from './consultas-nueva.component';

describe('ConsultasNuevaComponent', () => {
  let component: ConsultasNuevaComponent;
  let fixture: ComponentFixture<ConsultasNuevaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasNuevaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
