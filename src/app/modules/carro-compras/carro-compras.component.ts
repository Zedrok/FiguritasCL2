import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { CarritoService} from '../../services/carrito/carrito.service' ;

@Component({
  selector: 'app-carro-compras',
  templateUrl: './carro-compras.component.html',
  styleUrls: ['./carro-compras.component.css']
})

export class CarroComprasComponent implements OnInit {
  formgrouptest: FormGroup;

  form;
  items = [];
  mensaje;
  public totalCarrito: number;
  constructor(private carrito: CarritoService, private formulario: FormBuilder) {
    this.totalCarrito = 0;
  }

  ngOnInit(): void {
    this.formgrouptest = new FormGroup({
      controlNombre: new FormControl(),
      controlCorreo: new FormControl(),
      controlDireccion: new FormControl(),
      controlDireccion2: new FormControl(),
      controlCiudad: new FormControl(),
      controlComuna: new FormControl(),
      controlZip: new FormControl(),
    });

    this.items = this.carrito.ListarCarrito();
    this.items.forEach(elemento => {
      this.totalCarrito += elemento.precio * elemento.cantidad;
    });
  }

  EliminarDelCarrito(id): void{
    // tslint:disable-next-line: prefer-const
    let index = this.items.findIndex(elemento => elemento._id === id);
    this.totalCarrito = this.totalCarrito - (this.items[index].precio * this.items[index].cantidad);
    this.items.splice(index, 1);
    this.items = this.carrito.ListarCarrito();
  }

  onSubmit(): void{
  }

  getNombre(): void{
    return this.formgrouptest.get('controlNombre').value;
  }

  getCorreo(): void{
    return this.formgrouptest.get('controlCorreo').value;
  }

  generarOrden(): string {
    if (this.carrito.orden === ''){
      function generaNss(): string{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = 8;
        for (let i = 0; i < charactersLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
      }
      this.carrito.orden = generaNss();
    }
    return this.carrito.orden;
  }
}
