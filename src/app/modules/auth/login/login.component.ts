import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')

  })

  constructor(private aft:AuthService) { }

  ngOnInit(): void {
  }
  onLogin(){
    const{email,password}=this.loginForm.value ;
    this.aft.Login(email,password) ;
    window.alert("Logueado Exitosamente") ;
    
    console.log('Formularios',this.loginForm.value) ;

  }

}
