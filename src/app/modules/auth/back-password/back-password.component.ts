import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl} from '@angular/forms' ;
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-back-password',
  templateUrl: './back-password.component.html',
  styleUrls: ['./back-password.component.css']
})
export class BackPasswordComponent implements OnInit {
  emailUser = new FormControl('') ;
  constructor(private aft:AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  async resetPassword(){
    try{
      const email = this.emailUser.value ;
      await this.aft.resetPassword(email) ;

      window.alert("Email de recuperacion enviado , revisa tu correo porfavor") ;
      //refirect to login
    this.router.navigate(['/Login']);
      
    }catch(error){console.log(error)}

    
    
  }

}
