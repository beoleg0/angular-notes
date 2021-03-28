import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../services/note/note.service';
import {INote} from '../../shared/entities/note';

@Component({
  selector: 'app-notes-page',
  templateUrl: './notes-page.component.html',
  styleUrls: ['./notes-page.component.scss']
})
export class NotesPageComponent implements OnInit {

  notes: INote[] = [];

  constructor(
    private noteService: NoteService
  ) {
  }

  ngOnInit() {
    this.noteService.getAll().subscribe((notes) => {
      this.notes = notes;
    });
  }

}
