import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MessageInterface } from '../interfaces/message';




@Injectable({
  providedIn: 'root'
})
export class DataDbService {

  private contactCollection: AngularFirestoreCollection<MessageInterface>;

  constructor(private afs: AngularFirestore) {
    this.contactCollection = afs.collection<MessageInterface>('contacts')
  }

  saveMessage(newContact: MessageInterface):void {
    this.contactCollection.add(newContact);
  }
}
