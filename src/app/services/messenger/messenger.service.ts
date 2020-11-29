import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject();

  constructor() { }

  public sendMsg(producto: Product): void{
    this.subject.next(producto); /*triggering*/
  }

  getMsg(): any{
    return this.subject.asObservable();
  }
}
