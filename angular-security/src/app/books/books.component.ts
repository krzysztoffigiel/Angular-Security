import { AuthService } from './../services/auth.service';
import { Observable } from 'rxjs';
import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books.model';
import { catchError } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<Books[]>;
  isLoggedIn$: Observable<boolean>;

  constructor(private booksService: BooksService, private authService: AuthService) { }

  ngOnInit() {
    this.books$ = this.booksService.loadAllBooks();
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

}
