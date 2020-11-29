import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import { ɵELEMENT_PROBE_PROVIDERS } from '@angular/platform-browser';
import { Product } from 'src/app/models/product.model';
import { PRODUCT } from '../product/PRODUCT.const';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db:AngularFirestore) { }

  getFigura(){
    return this.db.collection("figura").snapshotChanges();
  }

  createFigura(nuevaFigura){
    console.log("consola",nuevaFigura);
    nuevaFigura.forEach((producto)=>{
      this.db.collection('figura').add({
        descripcion:producto.descripcion ,
        id:producto.id ,
        marca:producto.marca,
        nombre:producto.nombre,
        precio:producto.precio,
        stock:producto.stock
      });
    });
  }
  editarStock(figura:Product){
    let idFigura: String = figura._id ;
    
    this.db.collection('figura').valueChanges({
      descripcion:figura.descripcion ,
      id:figura._id ,
      marca:figura.marca,
      nombre:figura.nombre,
      precio:figura.precio,
      stock: figura.stock-1 
    })
  }
  
}
