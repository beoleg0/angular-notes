import {Observable} from 'rxjs';

export interface IStrategy {

  readonly STRATEGY_ID?: string;

  getAll<T>(path: string): Observable<T[]>;

  getSingle<T>(path: string, id: string): Observable<T>;

  create<T>(path: string, body: T): Observable<T>;

  update<T>(path: string, id: string, body): Observable<T>;

  delete<T>(path: string, id: string): Observable<T>;

}

export type storageStrategy = 'LOCALSTORAGE' | 'FIREBASE';
