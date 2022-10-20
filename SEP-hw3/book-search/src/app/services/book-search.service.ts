import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { filter, map, tap } from 'rxjs/operators';
import { Book, RootObject } from '../interfaces/book.interface';

@Injectable({
  providedIn: 'root'
})
export class BookSearchService {
  private readonly baseUrl: string = 'https://www.googleapis.com/books/v1/volumes?q='
  // books: Book[] = []
  private books$ = new BehaviorSubject<any>([])
  booksObs$ = this.books$.asObservable()

  private wishlist: string[] = []
  private wishlist$ = new BehaviorSubject<string[]>(this.wishlist)
  wishlistObs$ = this.wishlist$.asObservable()

  constructor(private readonly http: HttpClient) { }

  getBooks(bookname: string): Observable<Book[]> {
    return this.http.get<RootObject>(this.baseUrl + bookname).pipe(
      filter((res: RootObject) => res.totalItems !== 0),
      map(({ items }: RootObject): any => {
        if (items && items.length) {
          return items.map(({ volumeInfo }: Book) => {
            const book: any = {
              bookname: volumeInfo.title,
              publisher: volumeInfo.publisher,
              publishdate: volumeInfo.publishedDate,
              description: volumeInfo.description,
            };
            if (volumeInfo.imageLinks) {
              book.bookpic = volumeInfo.imageLinks.thumbnail || '';
            }
            return book;
          })
        }
      }),
      tap(books => {
        this.books$.next(books)
      })
    )
  }

  addToWishlist(bookname: string) {
    if (!this.wishlist.includes(bookname)) {
      this.wishlist.push(bookname)
    this.wishlist$.next(this.wishlist)
    }
  }
}
