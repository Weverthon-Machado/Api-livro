import { Component } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  books: any[] = [];  // Adicione explicitamente o tipo any[]
  searchTerm = new Subject<string>();

  constructor(private bookService: BookService) {
    this.searchTerm.pipe(
      debounceTime(300),
      switchMap(term => this.bookService.searchBooks(term))
    ).subscribe((books: any[]) => {
      this.books = books;
    });
  }

  searchBooks(term: string) {
    this.searchTerm.next(term);
  }
}