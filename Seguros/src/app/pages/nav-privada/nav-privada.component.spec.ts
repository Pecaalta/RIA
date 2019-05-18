import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPrivadaComponent } from './nav-privada.component';

describe('NavPrivadaComponent', () => {
  let component: NavPrivadaComponent;
  let fixture: ComponentFixture<NavPrivadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPrivadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
