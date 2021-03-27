import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../services/note/note.service';
import {INote} from '../../shared/entities/note';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidators} from '../../shared/validators/app-validators';

@Component({
  selector: 'app-single-note-page',
  templateUrl: './single-note-page.component.html',
  styleUrls: ['./single-note-page.component.scss']
})
export class SingleNotePageComponent implements OnInit {

  note: INote;
  noteId = '';
  commentForm: FormGroup;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.commentForm = new FormGroup({
      author: new FormControl('', [
        Validators.required,
        AppValidators.fullName,
        AppValidators.startsFromCapital
      ]),
      content: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.noteId = params.id;
          return this.noteService.getSingle(this.noteId);
        })
      )
      .subscribe(
        (note) => {
          this.note = note;
        }
      );
  }

  addComment(id: string) {
    const comment = {
      ...this.commentForm.value,
      createdAt: new Date().toString()
    };

    const updatedNote = {
      ...this.note,
      comments: [...this.note.comments, comment]
    };

    this.noteService.update(id, updatedNote)
      .subscribe((res) => {
        if (!!res) {
          this.note.comments.push(comment);
        }

        // После reset форма остаетется invalid, не нашел решения
        this.commentForm.reset({
          author: '',
          content: ''
        });
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
