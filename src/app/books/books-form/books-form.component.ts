import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { BooksService } from 'src/app/service/books.service';
import { CfgService } from 'src/app/service/cfg.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss'],
})
export class BooksFormComponent implements OnInit {

  bookForm = this.fb.group({
    _id: [''],
    name: ['', Validators.required],
    content: ['', Validators.required],
    bookType: ['其他', Validators.required],
    tags: [[]],
    cover: [''],
    author: [''],
    abstract: ['', Validators.required]
  })

  validateFlag = false;

  bookTypes: Array<string>;
  bookTags: Array<string>;
  constructor(private fb: FormBuilder, private bookService: BooksService, private router: Router, private route: ActivatedRoute, private cfgService: CfgService) { }

  ngOnInit() {
    this.getBookById();
    this.getBookType();
    this.getBookTag();
  }

  getBookType(){
    this.cfgService.getCfgList({key: 'ARTICLE_TYPE'}).subscribe(res=>{
      this.bookTypes = JSON.parse(res[0].valu)
    })
  }

  getBookTag(){
    this.cfgService.getCfgList({key: 'ARTICLE_TAG'}).subscribe(res=>{
      this.bookTags = JSON.parse(res[0].valu)
    })
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

  getBookById() {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.bookService.getBookById(id).subscribe(res => {
        this.bookForm.patchValue({
          _id: res._id,
          name: res.name,
          content: '内容不允许更改，更改无效',
          bookType: res.bookType,
          tags: res.tags,
          cover: res.cover,
          author: res.author,
          abstract: res.abstract
        })
      })
    }
  }

  fileUpload(file){
    if (file[0].name.indexOf('.txt') == -1){
      alert('目前只支持txt格式文件，其他格式敬请期待');
      return;
    }
    let that = this;
    let render = new FileReader()
    const f = new Blob(file, {type: 'text/plain'});
    render.onload = function(){
      that.bookForm.patchValue({
        content: this.result
      })
      if(that.bookForm.value.name==''){
        that.bookForm.patchValue({
          name: file[0].name
        })
      }
      if(that.bookForm.value.abstract==''){
        that.bookForm.patchValue({
          abstract: this.result.toString().substring(0,200)
        })
      }
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

