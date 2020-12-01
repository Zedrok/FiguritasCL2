import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ; //Regxp Segun W3.org
  
  loginForm = new FormGroup({
    email: new FormControl('',(Validators.required,Validators.pattern(this.validEmail))), 
    password: new FormControl('',(Validators.required,Validators.minLength(4))),

  })


  constructor(private aft:AuthService, private router:Router) { }

  ngOnInit(): void {
    window.alert('Disculpamos las molestias , de momento puedes iniciar sesion pero no podras acceder a tu perfil .Nuestros tecnicos lo solucionaran  pronto');
  }
  onLogin(){
    const{email,password}=this.loginForm.value ;
    this.aft.Login(email,password) ;
    window.alert("Logueado Exitosamente") ;
    this.router.navigate(['/inicio']) ;
    
    console.log('Formularios',this.loginForm.value) ;

  }
  getErrorMessage(field:string): string {
    let message ;
    if(this.loginForm.get(field).errors.required){
      message = "Por favor ingrese un valor , este campo es obligatorio" ;
    }
      else if (this.loginForm.get(field).hasError('pattern')){
        message = "Correo no valido, Formato: micorreo@gmail.com" ;
      }
      else if (this.loginForm.get(field).hasError('minlength')){
        const minChar:number= this.loginForm.get(field).errors?.minlength.requieredlength
        message = `Debe tener un minimo de ${minChar} caracteres` ;
      }
    return message ;
  }
  isValidField(field:string):boolean {
    return (this.loginForm.get(field).touched || (this.loginForm.get(field).dirty && !this.loginForm.get(field).valid))  
  }

}
