import {Injectable} from '@angular/core';
import {IStrategy} from '../../shared/entities/strategy';
import {Observable} from 'rxjs';
import {LocalstorageStrategy} from '../../shared/strategies/localstorage-strategy';

@Injectable({
  providedIn: 'root'
})
export class StorageContextService implements IStrategy {

  private startegy: IStrategy;

  constructor() {
    this.startegy = new LocalstorageStrategy();
  }

  create<T>(path: string, body: T): Observable<T> {
    return this.startegy.create(path, body);
  }

  delete<T>(path: string, id: string): Observable<T> {
    return this.startegy.delete(path, id);
  }

  getAll<T>(path: string): Observable<T> {
    return this.startegy.getAll(path);
  }

  getSingle<T>(path: string, id: string): Observable<T> {
    return this.startegy.getSingle(path, id);
  }

  update<T>(path: string, id: string, body): Observable<T> {
    return this.startegy.update(path, id, body);
  }

  setStrategy(strategy) {
    this.startegy = strategy;
  }

}
