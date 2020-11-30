import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})


export class AuthService {


  constructor(public afAuth: AngularFireAuth) { }
  async Login(email:string, password:string){
    const result = await this.afAuth.signInWithEmailAndPassword(email,password);
    return result ;
  }
  async register(email:string, password:string){
    const result = await await this.afAuth.createUserWithEmailAndPassword(email,password) ;

  }
  async logout(){
    await this.afAuth.signOut();
    alert('Ha cerrado sesion');
  }
  getCurrentUser(){
    
    
  }
}
