import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { FeedbackService } from '../service/feedback.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  feedBackForm = this.fb.group({
    body: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: [''],
    company: ['']
  })
  constructor(private fb: FormBuilder, private feedBackService: FeedbackService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() { }

  onSubmit() {
    this.feedBackService.createFeedback(this.feedBackForm.value).subscribe(res => {
      this.router.navigated = false;
      this.router.navigate([this.router.url]);
      this.feedBackForm.reset();
      // this.snackBar.open('消息已发出，请等待管理员和您联系', '关闭', {
      //   duration: 5000,
      // });
    })

  }
}

