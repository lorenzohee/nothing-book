import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback';
import { BaseService } from './base.service';

@Injectable()
export class FeedbackService {
  tokenVal: string;
  constructor(private service: BaseService) { }

  getFeedBack(obj): Observable<Feedback[]> {
    let params = new HttpParams().set('page', obj.get('page') || '1')
    return this.service.get({ url: 'api/feedback', params: params })
  }

  createFeedback(feedback: Feedback): Observable<Feedback> {
    return this.service.post({ url: 'api/feedback', form: feedback })
  }

  deleteFeedbackById(id: string): Observable<Feedback> {
    return this.service.delete(`api/feedback/${id}`)
  }
}
