import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

user:any={}
constructor( private authService:AuthService){}

ngOnInit(): void {
this.authService.getAuth().subscribe(user=>{
this.user=user;
})
}
}
