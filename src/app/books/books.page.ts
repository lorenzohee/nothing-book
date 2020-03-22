import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  listParam: {}
  books$: Observable<Book[]>

  bookCount$: Observable<string>

  currentPage = 1

  constructor(private bookService: BooksService,
    private titleService: Title,
    private metaService: Meta, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.books$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.listParam = {
          page: params.get('page') || 1,
          bookType: params.get('bookType'),
          tags: params.get('tags')
        }
        return this.bookService.getBookList(this.listParam)
      })
    )
    // this.titleService.setTitle('创新驿路');
    this.metaService.updateTag({ name: 'description', content: '创新驿路-提供最新创新方法，创新事务' })
    this.metaService.updateTag({ name: 'keywords', content: "创新方法,创新驿站,创新驿路,创新事件,创新,创新的事情,创新方法论" })
  }

  loadData(event) {
    this.currentPage += 1;
    this.bookService.getBookList(this.listParam).subscribe(res=>{
      event.target.complete();
      // event.target.disabled = true;
    })
  }
}
