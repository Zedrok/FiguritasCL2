import { Injectable } from '@angular/core';
import { Comment } from '../../models/comentarios.model';
import { COMMENT } from './COMMENT.cons';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private comentario: Comment[];
  private comentariotype: Comment[];


  constructor() {
    this.comentario = COMMENT;
  }


  public getAllComment(): Comment[] {
    return this.comentario;
  }

  public getByID(id: string): Comment {
    return this.comentario.find((comentario: Comment) => comentario._id);
  }

  public getByType(tipo: string): Comment[] {
    return this.comentario;
  }
}