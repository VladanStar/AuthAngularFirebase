import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string="";
  password: string="";

  constructor( private authService:AuthService,
    private router:Router) {}

  ngOnInit(): void {}


login(){
this.authService.login(this.username, this.password).then(()=>{
console.log("success")
alert('login is successfully')
}).catch(err=>{
console.log("not")
alert(err);
})
}
}
