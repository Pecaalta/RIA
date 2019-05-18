import { TestBed, async, inject } from '@angular/core/testing';

import { AutentificadoGuard } from './autentificado.guard';

describe('AutentificadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AutentificadoGuard]
    });
  });

  it('should ...', inject([AutentificadoGuard], (guard: AutentificadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
