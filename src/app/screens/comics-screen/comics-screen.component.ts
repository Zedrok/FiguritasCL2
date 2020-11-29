import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-comics-screen',
  templateUrl: './comics-screen.component.html',
  styleUrls: ['./comics-screen.component.css']
})
export class ComicsScreenComponent implements OnInit {

  public producto: Product[];

  constructor() {
    this.producto = [
      {
        _id: 'M1',
        nombre: 'Spider man',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '21990' ,
        descripcion: 'Figura de accion' ,
        stock : 1
      },
      {
        _id: 'M2',
        nombre: 'Iron man',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '91990' ,
        descripcion: 'Figura de accion' ,
        stock : 1
      },
      {
        _id: 'M3',
        nombre: 'Hulk',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '31990' ,
        descripcion: 'Figura de accion' ,
        stock : 1
      },
      {
        _id: 'M4',
        nombre: 'Fury',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '1990' ,
        descripcion: 'Figura de accion' ,
        stock : 1
      },
      {
        _id: 'M5',
        nombre: 'Groot',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '21990' ,
        descripcion: 'Figura de accion' ,
        stock : 1
      },
      {
        _id: 'M6',
        nombre: 'Capitan america',
        marca: 'Marvel' ,
        imgUrl: '/assets/Logo-Marvel.png',
        precio: '21990' ,
        descripcion: 'Figura de accion' ,
        stock : 1
      }
    ];
  }

  ngOnInit(): void {
  }

}
