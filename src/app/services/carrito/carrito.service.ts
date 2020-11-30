import { Injectable } from '@angular/core';
import { PRODUCT } from '../product/PRODUCT.const';
import { ProductoCarrito } from '../../models/productoCarrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  productos = PRODUCT;
  orden;
  items: ProductoCarrito[] = [];
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
    if (!encontrado) {
      this.items.push({ _id : producto._id, nombre : producto.nombre, precio : producto.precio, cantidad : 1, imgUrl: producto.imgUrl});
    }
  }

  limpiarCarrito(): any[]{
    this.items = [];
    return this.items;
  }

  ListarCarrito(): any[]{
    return this.items;
  }

  guardarOrden(orden): void{
    this.orden = orden;
  }
}
