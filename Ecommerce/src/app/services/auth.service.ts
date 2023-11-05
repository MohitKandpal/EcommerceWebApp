import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private firebaseAuth: AngularFireAuth) { }

  /**
   * Service to register a user to website
   * @param email : Email
   * @param password : Password
   */
  signup(email: string, password: string) {
    return this.firebaseAuth.createUserWithEmailAndPassword(email, password);
  }
}
