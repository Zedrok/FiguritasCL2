import { Injectable } from '@angular/core';

import {AngularFireAuth} from '@angular/fire/auth';
import { first } from 'rxjs/operators';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})


export class AuthService {


  constructor(public afAuth: AngularFireAuth) { }
  async Login(email:string, password:string){
      try{
        const result = await this.afAuth.signInWithEmailAndPassword(email,password);

      }catch(error){console.log(error);
    }
    const result = await this.afAuth.signInWithEmailAndPassword(email,password);
    return result ;
  }
  async register(email:string, password:string){
  try{
    const result = await await this.afAuth.createUserWithEmailAndPassword(email,password) ;
    window.alert("Creado Con exito")
    return result ;

  }catch(error){console.log(error)};
    
  }
  async logout(){
    try{
      await this.afAuth.signOut();
    }catch(error){console.log(error)};
    
    alert('Ha cerrado sesion');
  }
  async resetPassword(email:string){

    try{
      await this.afAuth.sendPasswordResetEmail(email);
    }catch(error){console.log(error)} 
  }
  getUser(){
    return this.afAuth.authState.pipe(first()).toPromise ;
  }
  
}
