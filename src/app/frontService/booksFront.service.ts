import { Injectable } from '@angular/core';
import Dexie from 'dexie';

import { IndexDBService } from './index-db.service';

export interface Book {
  title: string;
  book_id: string;
  book_name: string;
  book_cover: string;
  current_page: number, 
  mark: boolean
}

export interface BookWithID extends Book {
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class BooksFrontService {
  table: Dexie.Table<BookWithID, number>;

  constructor(private dexieService: IndexDBService) {
    this.table = this.dexieService.table('books');
  }

  getAll() {
    return this.table.toArray();
  }

  add(data) {
    return this.table.add(data);
  }

  update(id, data) {
    return this.table.update(id, data);
  }

  remove(id) {
    return this.table.delete(id);
  }

  getDetailByBookId(book_id){
    return this.table.where({'book_id': book_id}).first();
  }

  saveBookInfo(obj){
    this.getDetailByBookId(obj.book_id).then(res=>{
      if(res.id){
        this.update(res.id, obj)
      }else {
        this.add(obj)
      }
    }).catch(error=>this.add(obj))
  }
}