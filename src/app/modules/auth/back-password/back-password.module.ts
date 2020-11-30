import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackPasswordRoutingModule } from './back-password-routing.module';
import { BackPasswordComponent } from './back-password.component';
import { ReactiveFormsModule} from '@angular/forms' ;


@NgModule({
  declarations: [BackPasswordComponent],
  imports: [
    CommonModule,
    BackPasswordRoutingModule,
    ReactiveFormsModule
  ]
})
export class BackPasswordModule { }
