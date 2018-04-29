import { NoteModel } from './../../models/note-model';
import { NotesProvider } from './../../providers/notes/notes';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  notes: Array<NoteModel>

  constructor(public navCtrl: NavController, public notesService: NotesProvider) {

  }

  ionViewDidLoad(){
    this.notesService.getAll().then((notes: Array<NoteModel>)=>{
      console.log(JSON.stringify(notes));
      this.notes = notes;
    });
  }

  onClick(){
    console.log('alert')
  }

}
