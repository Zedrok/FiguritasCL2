import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ; //Regxp Segun W3.org
  
  registerForm = new FormGroup({
    email: new FormControl('',(Validators.required,Validators.pattern(this.validEmail))), 
    password: new FormControl('',(Validators.required,Validators.minLength(4))),

  })

  constructor(private atf: AuthService) { }

  ngOnInit(): void {
    
  }
  onRegister(){
    const {email,password} = this.registerForm.value ;
    this.atf.register(email,password) ;
    window.alert('Gracias por registrarte Con Nosotros, que tengas un buen dia');
    console.log('Formulario : ',this.registerForm.value) ;
  }
  getErrorMessage(field:string): string {
    let message ;
    if(this.registerForm.get(field).errors.required){
      message = "Por favor ingrese un valor , este campo es obligatorio" ;
    }
      else if (this.registerForm.get(field).hasError('pattern')){
        message = "Correo no valido, Formato: micorreo@gmail.com" ;
      }
      else if (this.registerForm.get(field).hasError('minlength')){
        const minChar:number= this.registerForm.get(field).errors?.minlength.requieredlength
        message = `Debe tener un minimo de ${minChar} caracteres` ;
      }
    return message ;
  }
  isValidField(field:string):boolean {
    return (this.registerForm.get(field).touched || (this.registerForm.get(field).dirty && !this.registerForm.get(field).valid))  
  }
}
