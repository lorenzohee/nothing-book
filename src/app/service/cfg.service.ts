import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cfg } from '../cfg/cfg';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CfgService {

  constructor(
    private service: BaseService
  ) { }

  getCfgList(obj): Observable<Cfg[]> {
    let params = new HttpParams().set('page', obj.page || '1')
    if (obj.key) {
      params = params.set('key', obj.key)
    }
    return this.service.get({ url: 'api/cfgs', params: params })
  }

  getCfgCount(obj): Observable<string> {
    let params = new HttpParams().set('count', 'true')
    return this.service.get({ url: 'api/cfgs', params: params })
  }

  getCfgById(id: string): Observable<Cfg> {
    if (id) {
      return this.service.get({ url: `api/cfgs/${id}` })
    } else {
      return new Observable();
    }
  }

  createCfg(form: Cfg): Observable<Cfg> {
    return this.service.post({ url: 'api/cfgs', form: form })
  }

  updateCfg(form: Cfg, id: string): Observable<Cfg> {
    return this.service.put({ url: `api/cfgs/${id}`, form: form })
  }

  deleteCfgById(id: string): Observable<Cfg> {
    return this.service.delete({ url: `api/cfgs/${id}` })
  }
}
