import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs: AngularFirestore) { }

  /**
   * Service to add a user to firebase collection
   * @param id : User Id
   * @param name : User Name
   * @param address : Address of user
   * @returns newly added user
   */
  addNewUser(id: string, name: string, address: string) {
    return this.fs.doc("users/" + id).set({
      name, address
    });
  }
}
