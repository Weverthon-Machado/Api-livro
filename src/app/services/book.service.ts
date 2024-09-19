import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiURL = 'https://www.googleapis.com/books/v1/volumes?q=';

  constructor(private http: HttpClient) {}

  searchBooks(query: string) {
    return this.http.get(`${this.apiURL}${query}`).pipe(
      map((response: any) => response.items || []),
      catchError(() => of([]))
    );
  }
}
