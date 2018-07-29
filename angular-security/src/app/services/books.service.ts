import { Books } from './../models/books.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BooksService {
    constructor(private http: HttpClient) {}

    loadAllBooks() {
        return this.http.get<Books[]>('/api/books');
    }

    findBookById(id:number) {
        return this.http.get<Books>('/api/books/' + id);
    }
}