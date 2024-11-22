import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books = [
    new Book(1, "Atomic Habits", "James Clear", 35),
    new Book(2, "The slight edge", "Jeff Olsen", 30),
    new Book(3, "Power of habits", "Charles Duhigg", 25)
  ]

  constructor() { }

  getBooks() : Book[]{
    return this.books;
  }
}
