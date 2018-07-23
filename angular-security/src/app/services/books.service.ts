import { Books } from './../models/books.model';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BooksService {
    constructor(private http: HttpClient) {}

    loadAllLessons() {
        return this.http.get<Books[]>('/api/books');
    }

    findLessonById(id:number) {
        return this.http.get<Books>('/api/books/' + id);
    }
}