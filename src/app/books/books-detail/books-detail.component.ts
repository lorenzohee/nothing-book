import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Book } from 'src/app/model/book';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { BooksService } from 'src/app/service/books.service';
import { Title, Meta } from '@angular/platform-browser';
import { BooksFrontService } from 'src/app/frontService/booksFront.service';

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
    private bookFrontService: BooksFrontService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.blogId = this.route.snapshot.params.id;
    this.bookFrontService.getDetailByBookId(this.blogId).then(res=>{
      this.currentPage = res.current_page
    }).finally(()=>this.getBookById())
  }

  getBookById(callback=function(temp){}) {
    this.bookService.getBookContentById({id: this.blogId, page: this.currentPage}).subscribe(res=>{
      this.book = res;
      this.bookFrontService.saveBookInfo({book_id: res._id, book_name: res.name, book_cover: res.cover, current_page: this.currentPage})
      //FIXME: change the page title info
      this.titleService.setTitle(res.name);
      this.metaService.updateTag({ name: 'description', content: res.name })
      let keyWords = (this.metaService.getTag('name= "keywords"') && this.metaService.getTag('name= "keywords"').content) || '小说,成人,英文,英文原著,英文小说,成人小说,H文,';
      keyWords += res.tags.join(',')
      this.metaService.updateTag({ name: 'keywords', content: keyWords })
      callback(res)
    })
  }

  getPrePage(event) {
    if(this.currentPage==1){
      return;
    }
    this.currentPage --
    this.getBookById(function(res){
      event.target.complete();
    });
  }

  getPrePageContent(){
    if(this.currentPage==1){
      return;
    }
    this.currentPage --
    this.getBookById();
  }

  getNextPage(event) {
    this.currentPage ++
    let that = this;
    setTimeout(function(){
      that.book.content = ''
      that.getBookById(function(res){
        event.target.complete();
        if(res.content == ''){
          event.target.disabled = true;
        }
        document.querySelector('ion-content').scrollToTop(500);
      })}, 1000)
  }

  getNextPageContent() {
    this.currentPage ++
    let that = this;
    that.book.content = ''
    that.getBookById(function(res){
      document.querySelector('ion-content').scrollToTop(500);
    })
  }

}
