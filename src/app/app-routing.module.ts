import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotesPageComponent} from './pages/notes-page/notes-page.component';
import {CreateNotePageComponent} from './pages/create-note-page/create-note-page.component';
import {EditNotePageComponent} from './pages/edit-note-page/edit-note-page.component';
import {SingleNotePageComponent} from './pages/single-note-page/single-note-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';

const routes: Routes = [
  {
    path: '',
    component: NotesPageComponent
  },
  {
    path: 'notes/:id',
    component: SingleNotePageComponent
  },
  {
    path: 'create-note',
    component: CreateNotePageComponent
  },
  {
    path: 'edit-note/:id',
    component: EditNotePageComponent
  },
  {
    path: 'settings',
    component: SettingsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
