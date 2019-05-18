import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurosActivosComponent } from './seguros-activos.component';

describe('SegurosActivosComponent', () => {
  let component: SegurosActivosComponent;
  let fixture: ComponentFixture<SegurosActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurosActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
