import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../services/note/note.service';
import {INote} from '../../shared/entities/note';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-note-page',
  templateUrl: './edit-note-page.component.html',
  styleUrls: ['./edit-note-page.component.scss']
})
export class EditNotePageComponent implements OnInit {

  note: INote;
  editNoteForm: FormGroup;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editNoteForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.noteService.getSingle(params.id);
        })
      )
      .subscribe((note) => {
        this.note = note;
        this.editNoteForm.setValue({
          title: note.title,
          content: note.content
        });
      });
  }

  editNote(id: string) {
    const updatedNote = {
      ...this.note,
      ...this.editNoteForm.value
    };

    this.noteService.update(id, updatedNote).subscribe(() => {
      this.router.navigate(['notes', id]);
    });
  }
}
