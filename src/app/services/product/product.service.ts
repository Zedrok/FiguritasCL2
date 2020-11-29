import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { PRODUCT } from './PRODUCT.const';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private productos: Product[];
  private productosType: Product[] ;
  

  constructor() {
    this.productos = PRODUCT;

  }

  public getAllProducts(): Product[]{
    return this.productos;
  }

  public getByID(id: string): Product {
    return this.productos.find((producto: Product) => producto._id === id);
  }
  

  
}
