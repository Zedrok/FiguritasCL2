import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { USUARIOS } from './USUARIOS.const';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuarios: Usuario[];

  constructor() {
    this.usuarios = USUARIOS ;
  }
  public getAllUsuarios(): Usuario[]{
    return this.usuarios;
  }
  public getUserByID(rut: string): Usuario{
    return this.usuarios.find((usuario: Usuario) => usuario.rut === rut) ;
  }
  public setNuevoUsuario(usuario: Usuario): void {
    this.usuarios.push(usuario) ;
    alert('Creado existosamente');
  }
  public existeUser(rut: string): boolean{
    if (this.usuarios.find((usuario: Usuario) => usuario.rut === rut)){
      return true ;
    }
    return false;
  }
  public getUserByMail(correo: string): Usuario{
    return this.usuarios.find((usuario: Usuario) => usuario.correo === correo) ;
  }

  public authUser(correo: string, password: string): boolean{
    if (this.getUserByMail(correo)){
      if (this.getUserByMail(correo).password === password){
        return true ;
      }

    }
    alert('Revise el correo , correo no encontrado');
    return false;
  }
}
