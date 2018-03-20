import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../models/book';
import {BookService} from '../services/book-service.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  @Output() closeAddBookClicked: EventEmitter<any> = new EventEmitter();

  book: Book = new Book();


  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  onSubmit(newBook: Book) {
    this.bookService.addBook(newBook);
  }

  closeLogEmit() {
    this.closeAddBookClicked.emit();
  }

}
