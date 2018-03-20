import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../models/book';
import {BookService} from '../services/book-service.service';

@Component({
  selector: 'app-remove-book',
  templateUrl: './remove-book.component.html',
  styleUrls: ['./remove-book.component.css']
})
export class RemoveBookComponent implements OnInit {
  @Output() closeRemoveButtonClicked: EventEmitter<any> = new EventEmitter();

  book: Book;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.SelectedBook.subscribe(data => {
      this.book = data;
    });
  }

  closeLogEmit() {
    this.closeRemoveButtonClicked.emit();
  }

  removeBook(book) {
    this.bookService.removeBook(book);
  }

}
