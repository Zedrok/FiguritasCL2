import { Injectable } from '@angular/core';
import { PRODUCT } from '../product/PRODUCT.const';
import { ProductoCarrito } from '../../models/productoCarrito.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  productos = PRODUCT;
  items: ProductoCarrito[] = [];
  encontrado = false;
  constructor() {
  }

  agregarCarrito(producto): void{
    let encontrado = false;
    this.items.forEach((elemento) => {
    if (elemento._id === producto._id){
        encontrado = true;
        elemento.cantidad += 1;
      }
    });

    if (!this.encontrado) {
      this.items.push({ _id : producto._id, nombre : producto.nombre, precio : producto.precio, cantidad : 1});
    }
  }

  limpiarCarrito(): any[]{
    this.items = [];
    return this.items;
  }

  ListarCarrito(): any[]{
    return this.items;
  }
}
