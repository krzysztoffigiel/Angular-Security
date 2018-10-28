
import { map } from 'rxjs/operators';
import { Books } from './../models/books.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable()
export class BooksService {
    constructor(private http: HttpClient) { }

    loadAllBooks(): Observable<Books[]> {
        return this.http.get<any>('/api/books').pipe(map(res => res.books));
    }

    findBookById(id: number) {
        return this.http.get<Books>('/api/books/' + id);
    }
}