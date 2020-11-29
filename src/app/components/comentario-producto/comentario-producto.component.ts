import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comentarios.model';

@Component({
  selector: 'app-comentario-producto',
  templateUrl: './comentario-producto.component.html',
  styleUrls: ['./comentario-producto.component.css']
})
export class ComentarioProductoComponent implements OnInit {

  @Input()
  public comment : Comment;

  constructor() { }

  ngOnInit(): void {
  }

}
