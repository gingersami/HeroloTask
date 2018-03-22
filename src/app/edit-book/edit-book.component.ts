import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Book} from '../models/book';
import {BookService} from '../services/book-service.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  @Output() closeEditClicked: EventEmitter<any> = new EventEmitter();
  book: Book;
  @ViewChild('form')
  form: FormControl;
  @Output() bookChanged = new EventEmitter();

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.bookService.SelectedBook.subscribe(data => {
      this.book = data;

    });
  }


  closeLogEmit() {
    this.closeEditClicked.emit();
    this.form.setValue(this.book);
  }


  onSubmit(changes: Book) {
    this.bookService.editBook(changes);
  }
}
