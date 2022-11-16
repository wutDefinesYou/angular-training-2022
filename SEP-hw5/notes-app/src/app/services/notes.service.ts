import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notesArr: Note[] = []
  private notes: BehaviorSubject<Note[]> = new BehaviorSubject<Note[]>(this.notesArr)
  notes$ = this.notes.asObservable()
  private curNote: BehaviorSubject<Note | null> = new BehaviorSubject<Note | null>(null)
  curNote$ = this.curNote.asObservable()

  constructor() { 
  }

  injectLocalStorage(notes: Note[]) {
    localStorage.setItem('notes', JSON.stringify(notes))
  }

  getAllNotes(): Observable<Note[]> {
    const local = localStorage.getItem('notes')
    if (local) {
      this.notesArr = JSON.parse(local)
      this.notes.next(this.notesArr)
    }
    return this.notes$
  }

  addNote(newnote: Note): void {
    this.notesArr.push(newnote)
    this.notes.next(this.notesArr)
    this.injectLocalStorage(this.notesArr)
  }

  deleteNote(note: Note): void {
    this.notesArr = this.notesArr.filter(item => item !== note)
    this.notes.next(this.notesArr)
    if (this.notesArr.length === 0)
      localStorage.removeItem('notes')
    else
      this.injectLocalStorage(this.notesArr)
  }

  onEdit(note: Note) {
    this.curNote.next(note)
  }

  updateNote(note: Note) {
    const index = this.notesArr.findIndex(item => item.id === note.id)
    this.notesArr[index] = note
    this.injectLocalStorage(this.notesArr)
  }
}
