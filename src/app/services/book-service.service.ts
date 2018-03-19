import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Book} from '../models/book';

@Injectable()
export class BookService {

  SelectedBook = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('assets/books.json' || 'src/assets/books.json');

  }
}

