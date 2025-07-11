import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Books } from '../../models/books';     // ✅ Interface
import { Book } from '../../services/book';     // ✅ Service

@Component({
  selector: 'app-book-form',
  standalone:false,
  templateUrl: './book-form.html',
  styleUrls: ['./book-form.css']
})
export class BookForm implements OnInit {
  books: Books = { isbn: '', title: '', author: '', publicationYear: 2020 };
  isEdit = false;

  constructor(
    private service: Book,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const isbn = this.route.snapshot.paramMap.get('isbn');
    if (isbn) {
      this.isEdit = true;
      this.service.getBook(isbn).subscribe(b => this.books = b);
    }
  }

  save() {
    if (this.isEdit) {
      this.service.updateBook(this.books.isbn, this.books).subscribe(() => this.router.navigate(['/books']));
    } else {
      this.service.addBook(this.books).subscribe(() => this.router.navigate(['/books']));
    }
  }
}
