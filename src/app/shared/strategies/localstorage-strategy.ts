import {IStrategy} from '../entities/strategy';
import {Observable, of} from 'rxjs';

export class LocalstorageStrategy implements IStrategy {

  public readonly STRATEGY_ID = 'LOCALSTORAGE';

  create<T>(path: string, body: T): Observable<T> {
    const items = this.getItems(path);
    items.push(body);
    localStorage.setItem(path, JSON.stringify(items));
    return of(body);
  }

  delete<T>(path: string, id: string): Observable<T> {
    let items = this.getItems(path);
    items = items.filter(item => item.id !== id);
    localStorage.setItem(path, JSON.stringify(items));
    return of(items);
  }

  getAll<T>(path: string): Observable<T> {
    const items = this.getItems(path);
    return of(items);
  }

  getSingle<T>(path: string, id: string): Observable<T> {
    const items = this.getItems(path);
    const singleItem = items.find(item => item.id === id);
    return of(singleItem);
  }

  update<T>(path: string, id: string, body): Observable<T> {
    const items = this.getItems(path);
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1, body);
    localStorage.setItem(path, JSON.stringify(items));
    return of(items);
  }

  private getItems(path: string) {
    let items = JSON.parse(localStorage.getItem(path));
    if (!items) {
      items = [];
    }
    return items;
  }

}
