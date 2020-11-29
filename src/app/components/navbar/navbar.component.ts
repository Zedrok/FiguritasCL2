import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void
  {

  }
  alertaMantenimiento():void{
    alert("Lo sentimos por el momento no se puede realizar busquedas")
  }
}
