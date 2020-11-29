import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Comment } from 'src/app/models/comentarios.model';
import { Product } from 'src/app/models/product.model';
import { CommentService } from 'src/app/services/comment/comment.service';
import { ProductService } from 'src/app/services/product/product.service';
import { MessengerService } from '../../services/messenger/messenger.service';


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


  constructor(
    private productService: ProductService,
    private commentService: CommentService,
    private activatedRouted: ActivatedRoute,
    private msg: MessengerService
    ) {
   }


  ngOnInit(): void {
    this.id = this.activatedRouted.snapshot.params.id;
    this.idpo =this.id ;
    this.product = this.productService.getByID(this.id) ;
    this.productos = this.productService.getAllProducts();
    this.comentario = this.commentService.getAllComment();
  }

    datosAgregarAlCarrito(): void{
      this.msg.sendMsg(this.product);
      console.log(this.product);
    }

}
