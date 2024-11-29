import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent implements OnInit {
  book? : Book;
  constructor(
    private activeRoute : ActivatedRoute,
    private bookService : BookService
  ){}
  
  ngOnInit(): void {
    this.activeRoute.params.subscribe(
      parametres => {
        //console.log(parametres['id']);
        
        if(this.bookService.getBookById(+parametres['id']) !== undefined){
          this.book = this.bookService.getBookById(+parametres['id']);
          console.log(this.book);
        }
          
        else
          console.log("Le livre est introuvable");
      }
    )
  }


}
