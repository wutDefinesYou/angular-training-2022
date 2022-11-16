import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes$!: Observable<Note[]>

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    this.getAllNotes()
  }

  getAllNotes() {
    this.notes$ = this.notesService.getAllNotes()
  }

  deleteNote(note: Note) {
    this.notesService.deleteNote(note)
  }

  editNote(note: Note) {
    this.notesService.onEdit(note)
  }
}
