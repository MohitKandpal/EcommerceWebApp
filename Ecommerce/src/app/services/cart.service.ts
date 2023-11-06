import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fs: AngularFirestore, private firebaseAuth: AuthService) { }

  /**
   * Service to add a product in user's cart
   * @param product : Product object
   * @returns a promise
   */
  addToCart(product: any): Promise<any>{
    return this.fs.collection(`users/${this.firebaseAuth.userId}/cart`).add(product);
  }

  /**
   * Service to fetch user's cart
   * @returns user's cart
   */
  getCart(): Observable<any> {
    return this.fs.collection(`users/${this.firebaseAuth.userId}/cart`).snapshotChanges();
  }

  /**
   * Service to remove a product from cart
   * @param id : Product Id
   * @returns Promise
   */
  removeFromCart(id: string): Promise<any> {
    return this.fs.doc(`users/${this.firebaseAuth.userId}/cart/${id}`).delete();
  }

  /**
   * Service to update quantity of a product in cart
   * @param id : Product Id
   * @param amount :Updated amount
   * @returns Promise instance
   */
  updateFromCart(id: string, amount: number): Promise<any> {
    return this.fs.doc(`users/${this.firebaseAuth.userId}/cart/${id}`).update({
      amount
    });
  }
}
