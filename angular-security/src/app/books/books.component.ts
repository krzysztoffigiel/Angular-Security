import { Observable } from 'rxjs';
import { BooksService } from './../services/books.service';
import { Component, OnInit } from '@angular/core';
import { Books } from '../models/books.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books$: Observable<Books[]>;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.books$ = this.booksService.loadAllBooks();
  }

}
