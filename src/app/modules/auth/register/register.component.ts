import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
   
    email: new FormControl (''),
   
    password:new FormControl(''),
  })
  constructor(private atf: AuthService) { }

  ngOnInit(): void {
  }
  onRegister(){
    const {email,password} = this.registerForm.value ;
    this.atf.register(email,password) ;
    console.log('Formulario : ',this.registerForm.value) ;
  }
}
