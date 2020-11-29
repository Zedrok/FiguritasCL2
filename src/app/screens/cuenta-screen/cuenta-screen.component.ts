import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/user/usuario.service';

@Component({
  selector: 'app-cuenta-screen',
  templateUrl: './cuenta-screen.component.html',
  styleUrls: ['./cuenta-screen.component.css']
})
export class CuentaScreenComponent implements OnInit {
  public usuarios: Usuario[] ;
  public correoLogin:FormControl ;
  
  public passwordLogin:FormControl ;

  public observableCorreoLogin$: Observable<any> ;
  public observablePasswordLogin$: Observable<any> ;


  public usuario: Usuario ;

  constructor(private usuarioServices: UsuarioService) { 
    this.correoLogin= new FormControl ('');
    this.passwordLogin= new FormControl('') ;
    this.observablePasswordLogin$ = this.passwordLogin.valueChanges ;
   
   

  }

  ngOnInit(): void {
    this.usuarios = this.usuarioServices.getAllUsuarios() ;
    this.observablePasswordLogin$.subscribe((pass) =>{


    console.log(pass);
   });
    
  }
  alertaMantenimiento():void{
    alert("Lo sentimos por el momento no se puede iniciar sesion / registrarse")
  }

 

}
