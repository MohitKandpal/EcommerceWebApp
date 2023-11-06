import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<any>;
  userId: string = "";

  constructor(private firebaseAuth: AngularFireAuth) { 
    this.user = this.firebaseAuth.user;
  }

  /**
   * Service to register a user to website
   * @param email : Email
   * @param password : Password
   */
  signup(email: string, password: string): Promise<any> {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * Service to login a user to website
   * @param email : Email Id
   * @param password : Password
   */
  login(email: string, password: string): Promise<any> {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password);
  }

  /**
   * Service to logout a user from website
   * @returns 
   */
  logout(): Promise<any> {
    return this.firebaseAuth.signOut();
  }
}
