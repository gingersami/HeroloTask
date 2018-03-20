import {Component, EventEmitter, OnInit} from '@angular/core';
import {BookService} from '../services/book-service.service';
import {Book} from '../models/book';
import {MaterializeAction} from 'angular2-materialize';

@Component({
  selector: 'app-book-display',
  templateUrl: './book-display.component.html',
  styleUrls: ['./book-display.component.css']
})
export class BookDisplayComponent implements OnInit {
  editBookClicked = new EventEmitter<string | MaterializeAction>();
  addBookClicked = new EventEmitter<string | MaterializeAction>();
  removeBookClicked = new EventEmitter<string | MaterializeAction>();

  books: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.populateBooks().subscribe(data => {
      this.books = data;
    });
  }


  openEditBook(book) {
    this.bookService.SelectedBook.emit(book);
    this.editBookClicked.emit({action: 'modal', params: ['open']});
  }

  closeLog() {
    this.removeBookClicked.emit({action: 'modal', params: ['close']});
    this.addBookClicked.emit({action: 'modal', params: ['close']});
    this.editBookClicked.emit({action: 'modal', params: ['close']});
  }

  openAddBook() {
    this.addBookClicked.emit({action: 'modal', params: ['open']});
  }

  openRemoveBook(book) {
    this.bookService.SelectedBook.emit(book);
    this.removeBookClicked.emit({action: 'modal', params: ['open']});

  }


}



