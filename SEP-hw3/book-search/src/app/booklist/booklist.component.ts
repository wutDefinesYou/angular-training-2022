import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../services/book-search.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.sass']
})
export class BooklistComponent implements OnInit {

  constructor(public readonly bookSearch: BookSearchService) { }

  ngOnInit(): void {
  }

}
