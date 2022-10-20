import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { fromEvent, Subscription } from 'rxjs'
import { debounceTime, filter, switchMap } from 'rxjs/operators'
import { BookSearchService } from '../services/book-search.service'

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.sass'],
})
export class InputBoxComponent implements OnInit {
  @ViewChild('inputbox', { static: true })
  inputBox!: ElementRef

  private inputSub!: Subscription

  constructor(private bookSearch: BookSearchService) {}

  ngOnInit(): void {
    this.inputSub = fromEvent(this.inputBox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        filter((_) => this.inputBox.nativeElement.value.trim() !== ''),
        switchMap((_) => {
          return this.bookSearch.getBooks(this.inputBox.nativeElement.value)
        })
      )
      .subscribe()
  }
}
