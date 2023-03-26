import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-logo-arg-p',
  templateUrl: './logo-arg-p.component.html',
  styleUrls: ['./logo-arg-p.component.css']
})
export class LogoArgPComponent implements OnInit {
 isLogger= false;

 constructor(private router:Router, private tokenService: TokenService){}


 ngOnInit():void{ 
  if(this.tokenService.getToken()){
    this.isLogger=true;
  } else 
  this.isLogger=false;
 }

 onLogout():void{
  this.tokenService.logOut();
  window.location.reload();
 }

 login(){
this.router.navigate(['/login']);
 }
}


