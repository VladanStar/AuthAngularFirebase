import { Injectable } from '@angular/core';
import{AngularFireAuth}from "@angular/fire/compat/auth"
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private afAuth:AngularFireAuth) { }

getAuth(){
return this.afAuth.authState.pipe(map(auth => auth))
}

login(email:string, password:string){
return this.afAuth.signInWithEmailAndPassword(email, password);
return this.afAuth.signInWithEmailAndPassword(email,password);
}
logout(){
return this.afAuth.signOut()

}
}
