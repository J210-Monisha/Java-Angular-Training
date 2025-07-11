import { Component, OnInit } from '@angular/core';
import { Book } from '../../services/book';
import { Books } from '../../models/books';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone:false,
  templateUrl: './book-list.html',
  styleUrls: ['./book-list.css']
})
export class BookList implements OnInit {
  books: Books[] = [];
  constructor(private service: Book, private router: Router) {}

  ngOnInit(): void {
    this.service.getAllBooks().subscribe(data => this.books = data);
  }

  editBook(isbn: string) {
    this.router.navigate(['/edit', isbn]);
  }

  deleteBook(isbn: string) {
    this.service.deleteBook(isbn).subscribe(() => this.ngOnInit());
  }
  confirmDelete(isbn: string) {
  if (confirm('Are you sure you want to delete this book?')) {
    this.service.deleteBook(isbn).subscribe(() => this.ngOnInit());
  }
}

}

