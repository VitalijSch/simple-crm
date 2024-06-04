import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, doc, updateDoc } from '@angular/fire/firestore';
import { User } from '../models/user.class';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firestore: Firestore = inject(Firestore);

  constructor() { }

  getSingleDocRef(docId: string) {
    return doc(this.getUsersRef(), docId)
  }


  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  public async addUser(newUser: {}) {
    await addDoc(this.getUsersRef(), newUser)
      .catch((err) => { console.error(err) })
      .then((result) => {
        console.log('Adding user finished: ', result)
      }
      )
  }

  async updateUser(user: any, id: string) {
    let docRef = this.getSingleDocRef(id);
    await updateDoc(docRef, user).catch(
      (err) => { console.error(err); }
    );
  }
}
