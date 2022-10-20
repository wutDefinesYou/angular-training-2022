import { Component, OnInit } from '@angular/core';
import { BookSearchService } from '../services/book-search.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.sass']
})
export class WishlistComponent implements OnInit {

  constructor(public readonly bookSearch: BookSearchService) { }

  ngOnInit(): void {
  }

}
