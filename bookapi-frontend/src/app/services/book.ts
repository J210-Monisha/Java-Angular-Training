import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from '../models/books';  // ✅ Using your interface

@Injectable({ providedIn: 'root' })
export class Book {
  private baseUrl = 'http://localhost:8080/api/books';

  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Books[]> {
    return this.http.get<Books[]>(this.baseUrl);
  }

  getBook(isbn: string): Observable<Books> {
    return this.http.get<Books>(`${this.baseUrl}/${isbn}`);
  }

  addBook(book: Books): Observable<Books> {
    return this.http.post<Books>(this.baseUrl, book);
  }

  updateBook(isbn: string, book: Books): Observable<Books> {
    return this.http.put<Books>(`${this.baseUrl}/${isbn}`, book);
  }

  deleteBook(isbn: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${isbn}`);
  }
}
