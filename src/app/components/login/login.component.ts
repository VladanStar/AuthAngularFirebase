import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;

  constructor( private authService:AuthService) {}

  ngOnInit(): void {}
login(){
this.authService.login(this.username, this.password).then(()=>{
alert('login is successfully')
}).catch(err=>{
alert(err);
})
}
}
