import {Injectable} from '@angular/core';
import {StorageContextService} from '../storage-context/storage-context.service';
import {INote} from '../../shared/entities/note';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private path = 'notes';

  constructor(
    private storageContextService: StorageContextService
  ) {
  }

  getAll(): Observable<INote[]> {
    return this.storageContextService.getAll<INote>(this.path);
  }

  getSingle(id: string): Observable<INote> {
    return this.storageContextService.getSingle<INote>(this.path, id);
  }

  create(body: INote) {
    return this.storageContextService.create(this.path, body);
  }

  update(id: string, body: INote) {
    return this.storageContextService.update(this.path, id, body);
  }

  delete(id: string) {
    return this.storageContextService.delete(this.path, id);
  }

}
