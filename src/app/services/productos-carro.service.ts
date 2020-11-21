import { Injectable } from '@angular/core';
import { Producto } from '../models/productos-carro.models';
import { PRODUCTOS } from './PRODUCTOS.const';

@Injectable({
  providedIn: 'root'
})
export class ProductosCarroService {
  private productos: Producto[]; // creamos nuestro arreglo de productos
  constructor() {
    this.productos = PRODUCTOS
  }

  public getAllProductos(): Producto[] {
    return this.productos;
  }
}
