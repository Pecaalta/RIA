import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerNoticiasComponent } from './ver-noticias.component';

describe('VerNoticiasComponent', () => {
  let component: VerNoticiasComponent;
  let fixture: ComponentFixture<VerNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
