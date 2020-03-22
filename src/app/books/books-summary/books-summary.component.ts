import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { switchMap } from 'rxjs/operators';
import { BooksService } from 'src/app/service/books.service';

@Component({
  selector: 'app-books-summary',
  templateUrl: './books-summary.component.html',
  styleUrls: ['./books-summary.component.scss'],
})
export class BooksSummaryComponent implements OnInit {

  book$: Observable<Book>;

  relatedBooks$: Observable<Book[]>;

  tagCloud$: Observable<string[]>;

  public user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BooksService,
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    this.getBookById()
  }

  getBookById() {
    this.book$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.bookService.getBookById(params.get('id'))
      )
    )
    this.book$.subscribe(book => {
      this.titleService.setTitle(book.name);
      this.metaService.updateTag({ name: 'description', content: book.name })
      let keyWords = (this.metaService.getTag('name= "keywords"') && this.metaService.getTag('name= "keywords"').content) || '创新方法,创新驿站,创新驿路,创新事件,创新,创新的事情,创新方法论,';
      keyWords += book.tags.join(',')
      this.metaService.updateTag({ name: 'keywords', content: keyWords })
    })
  }

}
