import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { AuthService } from './../services/auth.service';
import { of as observableOf, Observable } from 'rxjs';
import { BooksService } from './../services/books.service';
import { Component, OnInit, SecurityContext } from '@angular/core';
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
  isLoggedOut$: Observable<boolean>;
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  htmlSnippet2 = '<a href="&#x3000;javascript:alert(1)">CLICKME</a>';

  sanitizationForm: FormGroup;

  constructor(private booksService: BooksService, private authService: AuthService, private sanitizer: DomSanitizer,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    console.log('Hello Books Component')
    this.books$ = this.booksService.loadAllBooks().pipe(catchError(err => observableOf([])));
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.isLoggedOut$ = this.authService.isLoggedOut$;

    this.sanitizationForm = this.formBuilder.group({
      textAreaContent: ['', Validators.required ],
    });

  }

  onFormSubmit() {
    console.log('Form: ', this.sanitizationForm.value);
  }

}
