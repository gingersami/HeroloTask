import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Book} from '../models/book';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  SelectedBook = new EventEmitter();
  books: any;

  constructor(private http: HttpClient) {
  }

  populateBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('assets/books.json')
      .map((data) => {
        this.books = data;
        return this.books;
      });
  }

  editBook(newBook) {
    const index = this.books.findIndex((book) => book.Title === newBook.old.Title);
    this.books[index] = newBook.new;
  }

  removeBook(removeBook: Book) {
    const index = this.books.findIndex((book) => book.Title === removeBook.Title);
    this.books.splice(index, 1);
  }

  addBook(newBook: Book) {
    this.books.unshift(newBook);
  }

  checkDuplicate(newBook: Book) {
    return this.books.some((book) => {
      return newBook.Title.toLowerCase() === book.Title.toLowerCase();
    });
  }
}


