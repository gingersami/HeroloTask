import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Book} from '../models/book';
import {BookService} from '../services/book-service.service';
import {MaterializeAction} from 'angular2-materialize';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  @Output() closeAddBookClicked: EventEmitter<any> = new EventEmitter();
  globalActions = new EventEmitter<string | MaterializeAction>();
  @ViewChild('form')
  form: FormControl;
  book: Book = new Book();


  constructor(private bookService: BookService) {
  }

  ngOnInit() {

  }



  onSubmit(newBook: Book) {
    if (!this.bookService.checkDuplicate(newBook)) {
      this.bookService.addBook(newBook);
      this.form.reset();
    } else {
      this.triggerToast();
    }


  }

  closeLogEmit() {
    this.closeAddBookClicked.emit();
  }

  triggerToast() {
    this.globalActions.emit('toast');
  }

}
