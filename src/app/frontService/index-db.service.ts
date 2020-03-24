import Dexie from 'dexie';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexDBService extends Dexie {
  constructor() {
    super('books');
    this.version(1).stores({
      books: `++id, book_id, book_name, book_cover, current_page, mark`,
      siteCfg: `page_bg, page_size`
    });
  }
}