import { TestBed } from '@angular/core/testing';

import { ProductosCarroService } from './productos-carro.service';

describe('ProductosCarroService', () => {
  let service: ProductosCarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductosCarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});