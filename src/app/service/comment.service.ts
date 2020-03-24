import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  tokenVal: string;
  constructor(private service: BaseService) { }

  getComments(obj): Observable<Comment[]> {
    let params = new HttpParams().set('page', obj.get('page') || '1')
    return this.service.get({ url: 'api/comments', params: params })
  }

  createComment(comment: Comment): Observable<Comment> {
    return this.service.post({ url: 'api/comments', form: comment })
  }

  getCommentsByArticleId(articleId: string, articleType: string): Observable<Comment[]> {
    let params = new HttpParams().set('parent_id', articleId).set('parent_type', articleType)
    return this.service.get({ url: 'api/comments', params: params })
  }

  deleteCommentById(id: string): Observable<Comment> {
    return this.service.delete(`api/comments/${id}`)
  }
}
