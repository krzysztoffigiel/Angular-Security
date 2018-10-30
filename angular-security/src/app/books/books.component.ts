import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AuthService } from './../services/auth.service';
import { of as observableOf, Observable } from 'rxjs';
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
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';

  constructor(private booksService: BooksService, private authService: AuthService, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    console.log('Hello Books Component')
    this.books$ = this.booksService.loadAllBooks().pipe(catchError(err => observableOf([])));
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    console.log('isLoggedIn from BooksComponent: ', this.isLoggedIn$)
  }

}
