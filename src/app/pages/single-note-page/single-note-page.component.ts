import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../services/note/note.service';
import {INote} from '../../shared/entities/note';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-single-note-page',
  templateUrl: './single-note-page.component.html',
  styleUrls: ['./single-note-page.component.scss']
})
export class SingleNotePageComponent implements OnInit {

  note: INote;
  commentForm: FormGroup;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.commentForm = new FormGroup({
      author: new FormControl('', [
        Validators.required
      ]),
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
      .subscribe(
        (note) => {
          this.note = note;
        }
      );
  }

  addComment() {
    const comment = {
      ...this.commentForm.value,
      createdAt: new Date()
    };

    const updatedNote = {
      ...this.note,
      comments: [...this.note.comments, comment]
    };

    this.noteService.update(this.note.id, updatedNote)
      .subscribe(() => {
        this.note.comments.push(comment);
      });
  }

  deleteNote(id: string) {
    this.noteService.delete(id).subscribe(
      () => {
        this.router.navigate(['/']);
      }
    );
  }

}
