import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackPasswordComponent } from './back-password.component';

const routes: Routes = [{ path: '', component: BackPasswordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackPasswordRoutingModule { }
