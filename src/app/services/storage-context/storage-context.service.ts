import {Injectable} from '@angular/core';
import {IStrategy, strategyType} from '../../shared/entities/strategy';
import {Observable} from 'rxjs';
import {LocalstorageStrategy} from '../../shared/strategies/localstorage-strategy';
import {FirebaseStrategy} from '../../shared/strategies/firebase-strategy';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StorageContextService implements IStrategy {

  private strategy: IStrategy;

  constructor(
    private firestore: AngularFirestore
  ) {
    this.strategy = new LocalstorageStrategy();
    if (JSON.parse(localStorage.getItem('storage-strategy')) !== this.strategy.STRATEGY_ID) {
      this.setStrategy('FIREBASE');
    }
  }

  create<T>(path: string, body: T): Observable<T> {
    return this.strategy.create(path, body);
  }

  delete<T>(path: string, id: string): Observable<T> {
    return this.strategy.delete(path, id);
  }

  getAll<T>(path: string): Observable<T[]> {
    return this.strategy.getAll(path);
  }

  getSingle<T>(path: string, id: string): Observable<T> {
    return this.strategy.getSingle(path, id);
  }

  update<T>(path: string, id: string, body): Observable<T> {
    return this.strategy.update(path, id, body);
  }

  setStrategy(strategy: strategyType) {
    switch (strategy) {
      case 'FIREBASE':
        this.strategy = new FirebaseStrategy(this.firestore);
        break;
      case 'LOCALSTORAGE':
        this.strategy = new LocalstorageStrategy();
        break;
      default:
        this.strategy = new LocalstorageStrategy();
        break;
    }
    localStorage.setItem('storage-strategy', JSON.stringify(this.strategy.STRATEGY_ID));
  }

}
