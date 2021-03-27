import {Injectable} from '@angular/core';
import {IStrategy} from '../../shared/entities/strategy';
import {Observable} from 'rxjs';
import {LocalstorageStrategy} from '../../shared/strategies/localstorage-strategy';
import {FirebaseStrategy} from '../../shared/strategies/firebase-strategy';

@Injectable({
  providedIn: 'root'
})
export class StorageContextService implements IStrategy {

  private strategy: IStrategy;

  constructor() {
    this.strategy = new LocalstorageStrategy();
    if (JSON.parse(localStorage.getItem('storage-strategy')) !== this.strategy.STRATEGY_ID) {
      this.setStrategy(new FirebaseStrategy());
    }
  }

  create<T>(path: string, body: T): Observable<T> {
    return this.strategy.create(path, body);
  }

  delete<T>(path: string, id: string): Observable<T> {
    return this.strategy.delete(path, id);
  }

  getAll<T>(path: string): Observable<T> {
    return this.strategy.getAll(path);
  }

  getSingle<T>(path: string, id: string): Observable<T> {
    return this.strategy.getSingle(path, id);
  }

  update<T>(path: string, id: string, body): Observable<T> {
    return this.strategy.update(path, id, body);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
    localStorage.setItem('storage-strategy', JSON.stringify(this.strategy.STRATEGY_ID));
  }

}
