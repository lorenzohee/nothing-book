import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Book } from 'src/app/model/book';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss'],
})
export class BooksDetailComponent implements OnInit {
  book: Book;
  public currentPage: number = 1;
  public blogId = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.blogId = this.route.snapshot.params.id;
    this.getBookById()
  }

  getBookById(callback=function(){}) {
    this.bookService.getBookContentById({id: this.blogId, page: this.currentPage}).subscribe(res=>{
      this.book = res;
      this.titleService.setTitle(res.name);
      this.metaService.updateTag({ name: 'description', content: res.name })
      let keyWords = (this.metaService.getTag('name= "keywords"') && this.metaService.getTag('name= "keywords"').content) || '创新方法,创新驿站,创新驿路,创新事件,创新,创新的事情,创新方法论,';
      keyWords += res.tags.join(',')
      this.metaService.updateTag({ name: 'keywords', content: keyWords })
      callback()
    })
  }

  getPrePage(event) {
    this.currentPage --
    this.getBookById(function(){
      event.target.complete();
    });
  }

  getNextPage(event) {
    this.currentPage ++
    this.getBookById(function(){
      event.target.complete();
      document.querySelector('ion-content').scrollToTop(500);
    });
  }

}
