import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { Note } from '../interfaces/note'
import { NotesService } from '../services/notes.service'
import { v4 as uuidv4 } from 'uuid';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notes-input',
  templateUrl: './notes-input.component.html',
  styleUrls: ['./notes-input.component.scss'],
})
export class NotesInputComponent implements OnInit {
  form!: FormGroup
  isOnEdit: boolean = false
  oldID!: string | number
  subscription$!: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private notesService: NotesService,
  ) {}

  ngOnInit(): void {
    this.buildForm()
    this.onEdit()
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe()
  }

  buildForm() {
    this.form = this.formBuilder.group({
      title: [''],
      body: [''],
    })
  }

  reset() {
    this.form.setValue({
      title: '',
      body: ''
    },
    { emitEvent: false })
  }

  addNote(newnote: Note) {
    const note = {
      id: uuidv4(),
      ...newnote,
    }
    this.notesService.addNote(note)
    this.reset()
  }

  onEdit() {
    this.subscription$ = this.notesService.curNote$.subscribe(note => {
      if (note && note.id) {
        this.form.setValue({
          title: note.title,
          body: note.body
        }, {emitEvent: false})

        this.isOnEdit = true
        this.oldID = note.id
      }

    })
  }

  update(oldID: string | number, newnote: Note) {
    const note = {
      id: oldID,
      ...newnote,
    }
    this.notesService.updateNote(note)
    this.isOnEdit = false
    this.reset()
  }
}
