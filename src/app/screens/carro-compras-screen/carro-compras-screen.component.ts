import { Component, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../models/productoCarrito.model';
import { MessengerService } from '../../services/messenger/messenger.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carro-compras-screen',
  templateUrl: './carro-compras-screen.component.html',
  styleUrls: ['./carro-compras-screen.component.css']
})

export class CarroComprasScreenComponent implements OnInit {

  public productosEnCarrito = [];
  public totalCarrito: number;

  constructor(private msg: MessengerService){
    this.totalCarrito = 0;
    this.productosEnCarrito = [
      { _id: 'A1', nombre: 'Cooler', cantidad: 1, precio: 49990 },
      { _id: 'A3', nombre: 'Naruto Uzumaki', cantidad: 2, precio: 45990 }];
  }

  ngOnInit(): void {
    this.msg.getMsg().subscribe( (producto: ProductoCarrito) => {
      this.agregarProductoAlCarrito(producto);
    });
    this.calcularTotal();
  }

  agregarProductoAlCarrito(productoAgregado: ProductoCarrito): void{
    console.log(productoAgregado);
    this.productosEnCarrito.push({
      _id: productoAgregado._id,
      nombre: productoAgregado.nombre,
      precio: productoAgregado.precio,
      cantidad: 1,
    });
  }

  calcularTotal(): void{
    this.productosEnCarrito.forEach( (producto: ProductoCarrito) => {
    console.log(producto);
    this.totalCarrito += (producto.cantidad * producto.precio);
    });
  }
}

