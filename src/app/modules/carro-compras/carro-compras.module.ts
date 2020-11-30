import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule} from '@angular/forms' ;

import { CarroComprasRoutingModule } from './carro-compras-routing.module';
import { CarroComprasComponent } from './carro-compras.component';


@NgModule({
  declarations: [CarroComprasComponent],
  imports: [
    CommonModule,
    CarroComprasRoutingModule,
    ReactiveFormsModule
  ]
})
export class CarroComprasModule { }
