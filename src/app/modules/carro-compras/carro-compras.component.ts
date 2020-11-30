import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder} from '@angular/forms';
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
    this.form = this.formulario.group({
      controlDireccion: '',
      controlDireccion2: '',
      controlCiudad: '',
      controlComuna: '',
      controlZip: '',
    });
  }

  ngOnInit(): void {
    this.formgrouptest = new FormGroup({
      controlNombre: new FormControl(),
      cotrolCorreo: new FormControl(),
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
    window.alert( '\nNombre Completo: ' + this.formgrouptest.get('controlNombre').value
                  + '\nCorreo: ' + this.formgrouptest.get('controlCorreo').value
                  + '\nDireccion: ' + this.formgrouptest.get('controlDireccion').value
                  + '\nDireccion2: ' + this.formgrouptest.get('controlDireccion2').value
                  + '\nCiudad: ' + this.formgrouptest.get('controlCiudad').value
                  + '\nComuna: ' + this.formgrouptest.get('controlComuna').value
                  + '\nZip: ' + this.formgrouptest.get('controlZip').value);
  }

}
