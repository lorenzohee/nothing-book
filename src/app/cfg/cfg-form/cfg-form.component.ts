import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CfgService } from '../../service/cfg.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cfg-form',
  templateUrl: './cfg-form.component.html',
  styleUrls: ['./cfg-form.component.scss']
})
export class CfgFormComponent implements OnInit {

  cfgForm = this.fb.group({
    title: ['', Validators.required],
    key: ['', Validators.required],
    valu: ['', Validators.required],
    note: ['']
  })
  constructor(private fb: FormBuilder, private cfgService: CfgService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getCfgById()
  }

  onSubmit() {
    if (this.cfgForm.value._id) {
      this.cfgService.updateCfg(this.cfgForm.value, this.cfgForm.value._id).subscribe(res => {
        this.router.navigate([`/cfgs`]);
      })
    } else {
      this.cfgService.createCfg(this.cfgForm.value).subscribe(res => {
        this.router.navigate([`/cfgs`]);
      })
    }
  }
  getCfgById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cfgService.getCfgById(id).subscribe(res => {
        this.cfgForm = this.fb.group({
          _id: [''],
          title: ['', Validators.required],
          key: ['', Validators.required],
          valu: ['', Validators.required],
          note: ['']
        })
        this.cfgForm.patchValue({
          _id: res._id,
          title: res.title,
          key: res.key,
          valu: res.valu,
          note: res.note
        })
      })
    }
  }

  goback() {
    this.location.back()
  }
}
