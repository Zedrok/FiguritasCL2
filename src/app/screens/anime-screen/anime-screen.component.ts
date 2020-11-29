import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from '../../services/product/product.service';
import {FirebaseService} from '../../services/firebase/firebase.service';

@Component({
  selector: 'app-anime-screen',
  templateUrl: './anime-screen.component.html',
  styleUrls: ['./anime-screen.component.css']
})
export class AnimeScreenComponent implements OnInit {

  public productos: Product[];
  public productos1: Product[];

  constructor(private productService: ProductService,) {

  }

  ngOnInit(): void {
    this.productos = this.productService.getAllProducts();
  
  }

}
