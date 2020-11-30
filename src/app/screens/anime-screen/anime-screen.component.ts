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
  public tamashi : string;
  public bandai : string;
  public banpresto : string;
  public diamon : string;
  public hasbro : string;
  public dc : string;

  constructor(private productService: ProductService,) {

  }

  ngOnInit(): void {
    this.productos = this.productService.getAllProducts();
    this.tamashi = 'Tamashii nations';
    this.bandai = 'Bandai';
    this.banpresto = 'Banpresto';
    this.diamon = 'Diamond select toys',
    this.hasbro = 'Hasbro';
    this.dc = 'DC Comics';
  }

}
