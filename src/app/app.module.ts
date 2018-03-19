import 'materialize-css';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BookService} from './services/book-service.service';
import {HttpClientModule} from '@angular/common/http';
import { BookDisplayComponent } from './book-display/book-display.component';
import {TitleCasePipe} from '@angular/common';
import { CapitalizeFirstPipe } from './capitalize-first-letter.pipe';
import {FormsModule} from '@angular/forms';
import {MaterializeModule} from 'angular2-materialize';
import { EditBookComponent } from './edit-book/edit-book.component';



@NgModule({
  declarations: [
    AppComponent,
    BookDisplayComponent,
    CapitalizeFirstPipe,
    EditBookComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MaterializeModule,
  ],
  providers: [BookService, TitleCasePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
