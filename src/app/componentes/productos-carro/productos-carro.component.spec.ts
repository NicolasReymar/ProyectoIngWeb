import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosCarroComponent } from './productos-carro.component';

describe('ProductosCarroComponent', () => {
  let component: ProductosCarroComponent;
  let fixture: ComponentFixture<ProductosCarroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosCarroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosCarroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
