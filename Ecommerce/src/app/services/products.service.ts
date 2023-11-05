import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs: AngularFirestore) { }

  /**
   * Method to fetch all products
   * @returns products from firebase collection
   */
  getAllProducts(): Observable<any> {
    return this.fs.collection('Products').valueChanges()
  }
}
