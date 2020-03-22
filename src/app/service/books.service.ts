import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private baseService: BaseService) { }

  getBookList(obj): Observable<Book[]> {
    let params = new HttpParams().set('page', obj.page)
    if (obj.bookType) {
      params = params.set('bookType', obj.bookType)
    }
    if (obj.tags) {
      params = params.set('tags', obj.tags)
    }
    if (obj.pageNum) {
      params = params.set('pageNum', obj.pageNum)
    }
    if (obj.bookNum) {
      params = params.set('bookNum', obj.bookNum)
    }
    return this.baseService.get({ url: 'api/books', params: params })
  }

  getBookById(id: string): Observable<Book> {
    if (id) {
      return this.baseService.get({ url: `api/books/${id}` })
    } else {
      return new Observable();
    }
  }

  getBookContentById(obj): Observable<Book> {
    let params = new HttpParams().set('page', (obj.page || 1))
    params = params.set('id', obj.id)
    params = params.set('pageNum', (obj.pageNum || 500))
    if (obj.id) {
      return this.baseService.get({ url: `api/books/${obj.id}/content`, params: params })
    } else {
      return new Observable();
    }
  }

  createBook(form: Book): Observable<Book> {
    return this.baseService.post({ url: 'api/books', form: form })
  }

  updateBook(form: Book, id: string): Observable<Book> {
    return this.baseService.put({ url: `api/books/${id}`, form: form })
  }

  deleteBookById(id: string): Observable<Book> {
    return this.baseService.delete({ url: `api/books/${id}` })
  }

  postBannerFile(fileToUpload: File): Observable<any> {
    return this.baseService.postImageFile(fileToUpload);
  }
}
