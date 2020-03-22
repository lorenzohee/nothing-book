import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BooksService } from 'src/app/service/books.service';
import { ReadVarExpr } from '@angular/compiler';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss'],
})
export class BooksFormComponent implements OnInit {

  uploadFile = '';
  bookForm = this.fb.group({
    _id: [''],
    name: ['', Validators.required],
    content: ['', Validators.required],
    bookType: ['', Validators.required],
    tags: [[]],
    cover: [''],
    showTime: [new Date(), Validators.required],
    author: [''],
    abstract: ['', Validators.required]
  })

  validateFlag = false;

  bookTypes: any;
  bookTags: any;
  constructor(private fb: FormBuilder, private bookService: BooksService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getBookById();
  }

  onSubmit() {
    if (this.bookForm.value._id && this.bookForm.value._id != '') {
      this.bookService.updateBook(this.bookForm.value, this.bookForm.value._id).subscribe(res => {
        this.validateFlag = true;
        this.router.navigate([`/books/${res._id}`]);
      })
    } else {
      delete this.bookForm.value._id
      this.bookService.createBook(this.bookForm.value).subscribe(res => {
        this.validateFlag = true;
        this.router.navigate([`/books/${res._id}`]);
      })
    }
  }

  handleFileInput(files: FileList) {
    this.bookService.postBannerFile(files.item(0)).subscribe(res => {
      if (res.filename) {
        if (confirm('需要替代展示图片吗？')) {
          this.bookForm.patchValue({
            bannerUrl: `/${res.filename}`
          })
        } else {
          let selBox = document.createElement('textarea');
          selBox.style.position = 'fixed';
          selBox.style.left = '0';
          selBox.style.top = '0';
          selBox.style.opacity = '0';
          selBox.value = res.filename;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);
          alert(`图片上传地址为：/${res.filename}, 已复制到粘贴板`)
        }
      } else {
        alert('格式不正确或服务器错误，请重试')
      }
    })
  }

  getBookById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBookById(id).subscribe(res => {
        this.bookForm.patchValue({
          _id: res._id,
          name: res.name,
          content: res.content,
          bookType: res.bookType,
          tags: res.tags,
          cover: res.cover,
          showTime: res.showTime,
          author: res.author,
          abstract: res.abstract
        })
      })
    }
  }

  goback() {
    // this.location.back()
  }

  fileUpload(file){
    let that = this;
    let render = new FileReader()
    const f = new Blob(file, {type: 'text/plain'});
    render.onload = function(){
      that.bookForm.patchValue({
        content: this.result
      })
    }
    render.readAsText(f, 'GB2312')
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.bookForm.dirty || this.validateFlag) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    const confirmation = window.confirm('您的数据还未保存，是否取消保存?');

    return of(confirmation);
  }

}

