import 'materialize-css';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BookService} from './services/book-service.service';
import {HttpClientModule} from '@angular/common/http';
import {BookDisplayComponent} from './book-display/book-display.component';
import {TitleCasePipe} from '@angular/common';
import {CapitalizeFirstPipe} from './capitalize-first-letter.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterializeModule} from 'angular2-materialize';
import {EditBookComponent} from './edit-book/edit-book.component';
import {NewBookComponent} from './new-book/new-book.component';
import {RemoveBookComponent} from './remove-book/remove-book.component';


@NgModule({
  declarations: [
    AppComponent,
    BookDisplayComponent,
    CapitalizeFirstPipe,
    EditBookComponent,
    NewBookComponent,
    RemoveBookComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterializeModule,
    ReactiveFormsModule
  ],
  providers: [BookService, TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
