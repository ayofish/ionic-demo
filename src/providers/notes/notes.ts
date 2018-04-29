import { Injectable } from '@angular/core';
import {NoteModel} from '../../models/note-model';
/*
  Generated class for the NotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotesProvider {

  constructor() {
    console.log('Hello NotesProvider Provider');
  }

  getAll(){
    return new Promise((resolve, reject)=>{
      var notes = [
        new NoteModel('note 1.1', 'note 1.1.text'),
        new NoteModel('note 1.2', 'note 1.2.text')
      ];
      resolve(notes);
    });
  }

}
