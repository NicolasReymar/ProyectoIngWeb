import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos-carro.models';
import { ProductosCarroService } from '../../services/productos-carro.service';

@Component({
  selector: 'app-productos-carro',
  templateUrl: './productos-carro.component.html',
  styleUrls: ['./productos-carro.component.less']
})
export class ProductosCarroComponent implements OnInit {
  
  public productos: Producto[]; // creamos nuestro arreglo de productos
  constructor(private productosCard: ProductosCarroService) {}
  

  ngOnInit(): void {
    this.productos = this.productosCard.getAllProductos();
  }

}