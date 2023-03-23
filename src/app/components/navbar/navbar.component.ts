import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit{

user:any;
constructor(private authService:AuthService,
   private router:Router){}



logout(){
this.authService.logout();
this.router.navigate(['/login'])
}
ngOnInit(): void {
this.authService.getAuth().subscribe(user=>{
this.user=user;
})
}
}
