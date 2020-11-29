import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-marvel-screen',
  templateUrl: './marvel-screen.component.html',
  styleUrls: ['./marvel-screen.component.css']
})
export class MarvelScreenComponent implements OnInit {

  public productos: Product[];

  constructor() {
      this.productos = [
        {
          _id: '00',
          nombre: 'Black Widow',
          marca: 'Tamashii nations' ,
          imgUrl: '/assets/producto-marvel/figura1.jpg',
          precio: '30.990' ,
          descripcion: 'Figura de accion' ,
          stock : 0
        },
        {
          _id: '01',
          nombre: 'Wasp',
          marca: 'Tamashii nations' ,
          imgUrl: '/assets/producto-marvel/figura2.jpg',
          precio: '20.990' ,
          descripcion: 'Figura de accion' ,
          stock : 0
        },
        {
          _id: '02',
          nombre: 'Wolverine',
          marca: 'Diamond select toys' ,
          imgUrl: '/assets/producto-marvel/figura3.jpg',
          precio: '34.990' ,
          descripcion: 'Figura de accion' ,
          stock : 0
        },
        {
          _id: '03',
          nombre: 'Spider Gwen',
          marca: 'Diamond select toys' ,
          imgUrl: '/assets/producto-marvel/figura4.jpg',
          precio: '33.990' ,
          descripcion: 'Figura de accion' ,
          stock : 0
        },
        {
          _id: '04',
          nombre: 'Winter Soldier',
          marca: 'Hasbro' ,
          imgUrl: '/assets/producto-marvel/figura5.jpg',
          precio: '30.990' ,
          descripcion: 'Figura de accion' ,
          stock : 0
        },
        {
          _id: '05',
          nombre: 'Thanos',
          marca: 'Diamond select toys' ,
          imgUrl: '/assets/producto-marvel/figura6.jpg',
          precio: '59.990' ,
          descripcion: 'Figura de accion' ,
          stock : 0
        }
      ];
    }

  ngOnInit(): void {
  }

}
