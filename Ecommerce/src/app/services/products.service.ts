import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private fs: AngularFirestore, private storage: AngularFireStorage) { }

  /**
   * Method to fetch all products
   * @returns products from firebase collection
   */
  getAllProducts(): Observable<any> {
    return this.fs.collection('Products').valueChanges()
  }

  /**
   * Service to add a new product to collection
   * @param name : Product Name
   * @param price : Product Price
   * @param image : Image
   */
  addNewProduct(name: string, price: number, image: File) {
    let ref = this.storage.ref('ProductsImages/' + image.name);
    ref.put(image).then(data => {
      ref.getDownloadURL().subscribe(productPath => {
        this.fs.collection('Products').add({
          name, price, productPath
        });
      });
    });
  }

  /**
   * Service to fetch all products along with their document id
   * @returns Observable containing product list
   */
  getProducts(): Observable<any> {
    return this.fs.collection("Products").snapshotChanges();
  }

  /**
   * Service to delete a product from website
   * @param id : Product Id
   * @returns Promise
   */
  deleteProduct(id: string): Promise<any> {
    return this.fs.doc(`Products/${id}`).delete();
  }

  /**
   * Service to update product price
   * @param id : Product Id
   * @param price : Updated Price
   * @returns Promise
   */
  updateProductPrice(id: string, price: number): Promise<any> {
    return this.fs.doc(`Products/${id}`).update({ price });
  }
}
