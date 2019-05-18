import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVerComponent } from './consultar-ver.component';

describe('ConsultarVerComponent', () => {
  let component: ConsultarVerComponent;
  let fixture: ComponentFixture<ConsultarVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
