import { TestBed } from '@angular/core/testing';

import { CalculaCreditoService } from './calcula-credito.service';

describe('CalculaCreditoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculaCreditoService = TestBed.get(CalculaCreditoService);
    expect(service).toBeTruthy();
  });
});
