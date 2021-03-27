import {IStrategy} from '../entities/strategy';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {from} from 'rxjs/internal/observable/from';

export class FirebaseStrategy implements IStrategy {

  public readonly STRATEGY_ID = 'FIREBASE';

  constructor(private firestore: AngularFirestore) {
  }

  create<T>(path: string, body: T): Observable<T> {
    // @ts-ignore
    return from(this.firestore.collection(path).doc(body.id).set(body)) as Observable<any>;
  }

  delete<T>(path: string, id: string): Observable<T> {
    return from(this.firestore.collection(path).doc(id).delete()) as Observable<any>;
  }

  getAll<T>(path: string): Observable<T[]> {
    return this.firestore.collection<T>(path).valueChanges();
  }

  getSingle<T>(path: string, id: string): Observable<T> {
    return this.firestore.collection<T>(path).doc<T>(id).valueChanges();
  }

  update<T>(path: string, id: string, body): Observable<T> {
    return from(this.firestore.collection(path).doc(id).set(body)) as Observable<any>;
  }

}
