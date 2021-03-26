import {Component, OnInit} from '@angular/core';
import {NoteService} from '../../services/note/note.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-note-page',
  templateUrl: './create-note-page.component.html',
  styleUrls: ['./create-note-page.component.scss']
})
export class CreateNotePageComponent implements OnInit {

  createNoteForm: FormGroup;

  constructor(
    private noteService: NoteService,
    private router: Router
  ) {
    this.createNoteForm = new FormGroup({
      title: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  createNote() {
    const newNote = {
      id: Date.now().toString(),
      comments: [],
      ...this.createNoteForm.value
    };

    this.noteService.create(newNote).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}
