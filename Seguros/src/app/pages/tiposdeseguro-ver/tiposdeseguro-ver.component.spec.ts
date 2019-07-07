import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposdeseguroVerComponent } from './tiposdeseguro-ver.component';

describe('TiposdeseguroVerComponent', () => {
  let component: TiposdeseguroVerComponent;
  let fixture: ComponentFixture<TiposdeseguroVerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposdeseguroVerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposdeseguroVerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
