import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPublicaComponent } from './nav-publica.component';

describe('NavPublicaComponent', () => {
  let component: NavPublicaComponent;
  let fixture: ComponentFixture<NavPublicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPublicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPublicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
