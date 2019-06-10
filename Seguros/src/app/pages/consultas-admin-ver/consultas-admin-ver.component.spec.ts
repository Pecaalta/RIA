import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasAdminVerComponent } from './consultas-admin-ver.component';

describe('ConsultasAdminVerComponent', () => {
  let component: ConsultasAdminVerComponent;
  let fixture: ComponentFixture<ConsultasAdminVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasAdminVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasAdminVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
