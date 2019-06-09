import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasVerComponent } from './consultas-ver.component';

describe('ConsultasVerComponent', () => {
  let component: ConsultasVerComponent;
  let fixture: ComponentFixture<ConsultasVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
