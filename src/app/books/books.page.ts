import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../model/book';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../service/books.service';
import { BooksFrontService } from '../frontService/booksFront.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  listParam: {}
  books: Book[]
  currentPage = 1
  constructor(private bookService: BooksService,
    private titleService: Title,
    private metaService: Meta, 
    private route: ActivatedRoute, 
    private bookFrontService: BooksFrontService,
    private router: Router) { }

  ngOnInit() {
    let params = this.route.snapshot.params
    this.listParam = {
      page: params.page || 1,
      bookType: params.bookType,
      tags: params.tags,
      type: params.type
    };
    this.getBookList();
    //TODO: change the page title
    // this.titleService.setTitle('创新驿路');
    this.metaService.updateTag({ name: 'description', content: '创新驿路-提供最新创新方法，创新事务' })
    this.metaService.updateTag({ name: 'keywords', content: "创新方法,创新驿站,创新驿路,创新事件,创新,创新的事情,创新方法论" })
  }

  loadData(event) {
    if(this.route.snapshot.params.type=='reading'){
      event.target.disabled = true;
      return false;
    }
    this.currentPage += 1;
    this.listParam = Object.assign(this.listParam, {page: this.currentPage})
    this.bookService.getBookList(this.listParam).subscribe(res=>{
      if(res.length==0){
        event.target.disabled = true;
        return;
      }
      this.books = this.books.concat(res)
      event.target.complete();
      // event.target.disabled = true;
    })
  }

  getBookList(){
    let that = this;
    if(this.route.snapshot.params.type=='reading'){
      that.bookFrontService.getAll().then(res=>{
        that.books = []
        res.forEach(book=>{
          let bookTmp = new Book();
          bookTmp.name = book.book_name;
          bookTmp._id = book.book_id;
          bookTmp.cover = book.book_cover;
          that.books.push(bookTmp)
        })
      })
    }else{
      this.bookService.getBookList(this.listParam).subscribe(res=>{
        this.books = res
      })
    }
  }
}
