import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comentarios.model';
import { Product } from 'src/app/models/product.model';
import { CommentService } from 'src/app/services/comment/comment.service';
import { ProductService } from 'src/app/services/product/product.service';
import { CarritoService } from '../../services/carrito/carrito.service';


@Component({
  selector: 'app-detalle-figura-screen',
  templateUrl: './detalle-figura-screen.component.html',
  styleUrls: ['./detalle-figura-screen.component.css']
})
export class DetalleFiguraScreenComponent implements OnInit {
  private id: string ;
  public idpo: string;
  public product: Product;
  public productos: Product[];
  public comentario: Comment[];
  public promedio : number ;
  public cantidadComentario: number;

  constructor(
    private productService: ProductService,
    private commentService: CommentService,
    private activatedRouted: ActivatedRoute,
    private carrito: CarritoService, 
    ) {
   }


  ngOnInit(): void {
    this.id = this.activatedRouted.snapshot.params.id;
    this.idpo = this.id ;
    this.product = this.productService.getByID(this.id) ;
    this.productos = this.productService.getAllProducts();
    this.comentario = this.commentService.getAllComment();
    this.promedio = 0 ;
    this.cantidadComentario = 0;
    this.promedioValoracion();
    this.cantidadCo();
  }

  agregarCarrito(producto): void{
    this.carrito.agregarCarrito(producto);
  }
  
  promedioValoracion (): void{
    var i = 0;
    var b = 0;
    for (const comment of this.comentario){
       if (this.idpo === comment._idProduct) {
        i ++;
        b = b + comment.puntuacion;  
       } 
    }  
    this.promedio =Math.round(b/i) ;
  }

  cantidadCo(): void{
    var i = 0;
    for (const comment of this.comentario){
      if (this.idpo === comment._idProduct) {
       i++; 
      }
   }  
   this.cantidadComentario = i ;
  }




}
