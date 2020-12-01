import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogged = true ;
  constructor(private atf: AuthService, private router: Router) { }

  // tslint:disable-next-line: typedef
  async ngOnInit()
  {
    const user: any = await this.atf.getUser() ;
    if (user){
      this.isLogged = true ;
    }
  }
  alertaMantenimiento(): void{
    alert('Lo sentimos por el momento no se puede realizar busquedas');
  }
  // tslint:disable-next-line: typedef
  logOut(){
    // tslint:disable-next-line: no-unused-expression
    this.atf.logout ;
  }

}
