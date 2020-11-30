import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarroComprasComponent } from './carro-compras.component';

const routes: Routes = [{ path: '', component: CarroComprasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarroComprasRoutingModule { }
