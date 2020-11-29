import { Component, Input, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../models/productoCarrito.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: '[app-productos-carrito]',
  templateUrl: './productos-carrito.component.html',
  styleUrls: ['./productos-carrito.component.css']
})
export class ProductosCarritoComponent implements OnInit {

  @Input()
  public productoEnCarrito: ProductoCarrito;

  constructor() {
  }

  ngOnInit(): void {
  }

}
