import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private atf: AuthService) { }

  ngOnInit(): void
  {

  }
  alertaMantenimiento():void{
    alert("Lo sentimos por el momento no se puede realizar busquedas")
  }
  logOut():void{
    this.atf.logout ;

  }
}
