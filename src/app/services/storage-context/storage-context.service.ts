import {Injectable} from '@angular/core';
import {IStrategy, storageStrategy} from '../../shared/entities/strategy';
import {Observable} from 'rxjs';
import {LocalstorageStrategy} from '../../shared/strategies/localstorage-strategy';
import {FirebaseStrategy} from '../../shared/strategies/firebase-strategy';
import {AngularFirestore} from '@angular/fire/firestore';
import {LocalStorageEnum} from '../../shared/enums/local-storage.enum';
import {localStorageGet, localStorageSet} from '../../shared/utils/local-storage.utils';

@Injectable({
  providedIn: 'root'
})
export class StorageContextService implements IStrategy {

  private storage: IStrategy;

  constructor(
    private firestore: AngularFirestore
  ) {
    this.storage = new LocalstorageStrategy();
    if (localStorageGet<string>(LocalStorageEnum.storageStrategy) !== this.storage.STRATEGY_ID) {
      this.setStrategy('FIREBASE');
    }
  }

  create<T>(path: string, body: T): Observable<T> {
    return this.storage.create(path, body);
  }

  delete<T>(path: string, id: string): Observable<T> {
    return this.storage.delete(path, id);
  }

  getAll<T>(path: string): Observable<T[]> {
    return this.storage.getAll(path);
  }

  getSingle<T>(path: string, id: string): Observable<T> {
    return this.storage.getSingle(path, id);
  }

  update<T>(path: string, id: string, body): Observable<T> {
    return this.storage.update(path, id, body);
  }

  setStrategy(strategy: storageStrategy) {
    switch (strategy) {
      case 'FIREBASE':
        this.storage = new FirebaseStrategy(this.firestore);
        break;
      case 'LOCALSTORAGE':
        this.storage = new LocalstorageStrategy();
        break;
      default:
        this.storage = new LocalstorageStrategy();
        break;
    }
    localStorageSet(LocalStorageEnum.storageStrategy, this.storage.STRATEGY_ID);
  }

}
