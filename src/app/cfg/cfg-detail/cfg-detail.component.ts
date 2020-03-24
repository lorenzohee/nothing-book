import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cfg } from '../cfg';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { CfgService } from '../../service/cfg.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-cfg-detail',
  templateUrl: './cfg-detail.component.html',
  styleUrls: ['./cfg-detail.component.scss']
})
export class CfgDetailComponent implements OnInit {

  cfg$: Observable<Cfg>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cfgService: CfgService
  ) { }

  ngOnInit() {
    this.getCfgById()
  }

  getCfgById() {
    this.cfg$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.cfgService.getCfgById(params.get('id'))
      )
    )
  }

  deleteCfg(id) {
    if (confirm('确认要删除此cfg吗？')) {
      this.cfgService.deleteCfgById(id).subscribe(res => {
        this.router.navigate([`/cfgs/`])
      })
    }
  }
}
