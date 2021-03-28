import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NotesPageComponent} from './pages/notes-page/notes-page.component';
import {CreateNotePageComponent} from './pages/create-note-page/create-note-page.component';
import {EditNotePageComponent} from './pages/edit-note-page/edit-note-page.component';
import {SingleNotePageComponent} from './pages/single-note-page/single-note-page.component';
import {SettingsPageComponent} from './pages/settings-page/settings-page.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    NotesPageComponent,
    CreateNotePageComponent,
    EditNotePageComponent,
    SingleNotePageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
