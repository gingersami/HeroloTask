import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../models/book';
import {BookService} from '../services/book-service.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Output() closeEditClicked: EventEmitter<any> = new EventEmitter();
  book: Book;
  @Output() bookChanged = new EventEmitter();
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.SelectedBook.subscribe(data => {
      this.book = data;
    });
  }

  closeLogEmit() {
    this.closeEditClicked.emit();
  }



  onSubmit(changes: Book) {

  }
}
