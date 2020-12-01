import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogged = false ;
  constructor(private atf: AuthService, private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit()
  {
    const user =  this.atf.getUser() ;
    if (user!=null){
      console.log(user) ;
    
      console.log('Esta logueado ',this.isLogged.valueOf());
    }
  }
  alertaMantenimiento(): void{
    alert('Lo sentimos por el momento no se puede realizar busquedas');
  }
  // tslint:disable-next-line: typedef
  logOut(){
    // tslint:disable-next-line: no-unused-expression
    this.isLogged = false ;
    this.router.navigate(['/inicio']) ;
    return this.atf.logout ;
    
  }

}
