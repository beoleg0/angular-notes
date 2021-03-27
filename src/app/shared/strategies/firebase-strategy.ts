import {IStrategy} from '../entities/strategy';
import {Observable} from 'rxjs';

export class FirebaseStrategy implements IStrategy {

  public readonly STRATEGY_ID = 'FIREBASE';

  create<T>(path: string, body: T): Observable<T> {
    return undefined;
  }

  delete<T>(path: string, id: string): Observable<T> {
    return undefined;
  }

  getAll<T>(path: string): Observable<T> {
    return undefined;
  }

  getSingle<T>(id: string): Observable<T> {
    return undefined;
  }

  update<T>(id: string, body): Observable<T> {
    return undefined;
  }

}
