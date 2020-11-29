import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { CarritoService } from '../../services/carrito/carrito.service';

@Component({
  selector: 'app-carro-compras-screen',
  templateUrl: './carro-compras-screen.component.html',
  styleUrls: ['./carro-compras-screen.component.css']
})

export class CarroComprasScreenComponent implements OnInit {

  form;
  items = [];
  mensaje;
  public totalCarrito: number;

  constructor(private carrito: CarritoService){
    this.totalCarrito = 0;
    /*this.form = this.formulario.group({
      controlNombre: '',
      controlCorreo: ''
    });*/
  }

  ngOnInit(): void {
    this.items = this.carrito.ListarCarrito();
  }

  EliminarDelCarrito(id): void{
    // tslint:disable-next-line: prefer-const
    let index = this.items.findIndex(elemento => elemento._id === id);
    this.items.splice(index, 1);
    this.items = this.carrito.ListarCarrito();
  }
  /*onSubmit(dato): void{
    console.log(dato);
    this.mensaje = this.carrito.GuardarDatos(dato);
    this.mensaje.subscribe(datos => {

    });
  }
  */

  /*calcularTotal(): void{
    this.productosEnCarrito.forEach( (producto: ProductoCarrito) => {
    console.log(producto);
    this.totalCarrito += (producto.cantidad * producto.precio);
    });
  }*/
}

