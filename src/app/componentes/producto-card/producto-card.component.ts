import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productos-carro.models';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.less']
})
export class ProductoCardComponent implements OnInit {


  @Input() // tipo input
  public producto: Producto;

  constructor() { }

  ngOnInit(): void {
  }

  

}
