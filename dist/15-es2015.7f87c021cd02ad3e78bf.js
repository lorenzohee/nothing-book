(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"n1/D":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("MKJQ"),r=u("sZkV"),b=u("iInd"),a=u("SVse"),s=u("eIep"),c=u("mrSG"),h=u("IheW"),p=u("HDdC"),d=u("7o/Q");class g{constructor(l,n){this.count=l,this.source=n}call(l,n){return n.subscribe(new m(l,this.count,this.source))}}class m extends d.a{constructor(l,n,u){super(l),this.count=n,this.source=u}error(l){if(!this.isStopped){const{source:n,count:u}=this;if(0===u)return super.error(l);u>-1&&(this.count=u-1),n.subscribe(this._unsubscribeAndRecycle())}}}var k=u("JIr8");let f=(()=>{class l{constructor(l,n,u,e,t){this.platformId=l,this.appId=n,this.httpClient=u,this.zone=e,this.toastController=t,this.serviceAdd="/"}getRequestOptions(l){let n=new h.h;n.append("X-Requested-With","XMLHttpRequest"),n.append("Content-Type","application/json; charset=UTF-8"),n.append("Accept","application/json");let u={headers:n,withCredentials:!0};return l&&(u=Object.assign({params:l},u)),u}get(l){let n=this.getRequestOptions(l.params);return this.httpClient.get(`${this.serviceAdd}${l.url}`,n).pipe(function(l=-1){return n=>n.lift(new g(l,n))}(3),Object(k.a)(l=>this.handleError(l)))}post(l){let n=this.getRequestOptions();return this.httpClient.post(`${this.serviceAdd}${l.url}`,l.form,n).pipe(Object(k.a)(l=>this.handleError(l)))}delete(l){let n=this.getRequestOptions();return this.httpClient.delete(`${this.serviceAdd}${l.url}`,n).pipe(Object(k.a)(l=>this.handleError(l)))}put(l){let n=this.getRequestOptions();return this.httpClient.put(`${this.serviceAdd}${l.url}`,l.form,n).pipe(Object(k.a)(l=>this.handleError(l)))}postImageFile(l){const n=new FormData;return n.append("blogBanner",l,l.name),this.httpClient.post(`${this.serviceAdd}api/blogs/upload`,n).pipe(Object(k.a)(l=>this.handleError(l)))}handleError(l){return l instanceof h.f&&this.zone.run(()=>c.a(this,void 0,void 0,(function*(){(yield this.toastController.create({message:l.message,duration:3e3})).present()}))),l.error instanceof ErrorEvent?console.error("An error occurred:",l.error.message):console.log(`Backend returned code ${l.status}, `+`body was: ${JSON.stringify(l.error)}`),new p.a(l=>l.error("Something bad happened; please try again later."))}}return l.ngInjectableDef=e.Mb({factory:function(){return new l(e.Nb(e.z),e.Nb(e.c),e.Nb(h.c),e.Nb(e.x),e.Nb(r.Ib))},token:l,providedIn:"root"}),l})(),v=(()=>{class l{constructor(l){this.baseService=l}getBookList(l){let n=(new h.i).set("page",l.page);return l.bookType&&(n=n.set("bookType",l.bookType)),l.tags&&(n=n.set("tags",l.tags)),l.pageNum&&(n=n.set("pageNum",l.pageNum)),l.bookNum&&(n=n.set("bookNum",l.bookNum)),this.baseService.get({url:"api/books",params:n})}getBookById(l){return l?this.baseService.get({url:`api/books/${l}`}):new p.a}getBookContentById(l){let n=(new h.i).set("page",l.page||1);return n=n.set("id",l.id),n=n.set("pageNum",l.pageNum||2e3),l.id?this.baseService.get({url:`api/books/${l.id}/content`,params:n}):new p.a}createBook(l){return this.baseService.post({url:"api/books",form:l})}updateBook(l,n){return this.baseService.put({url:`api/books/${n}`,form:l})}deleteBookById(l){return this.baseService.delete({url:`api/books/${l}`})}postBannerFile(l){return this.baseService.postImageFile(l)}}return l.ngInjectableDef=e.Mb({factory:function(){return new l(e.Nb(f))},token:l,providedIn:"root"}),l})();class x{constructor(l,n,u,e,t){this.bookService=l,this.titleService=n,this.metaService=u,this.route=e,this.router=t,this.currentPage=1}ngOnInit(){this.books$=this.route.paramMap.pipe(Object(s.a)(l=>(this.listParam={page:l.get("page")||1,bookType:l.get("bookType"),tags:l.get("tags")},this.bookService.getBookList(this.listParam)))),this.metaService.updateTag({name:"description",content:"\u521b\u65b0\u9a7f\u8def-\u63d0\u4f9b\u6700\u65b0\u521b\u65b0\u65b9\u6cd5\uff0c\u521b\u65b0\u4e8b\u52a1"}),this.metaService.updateTag({name:"keywords",content:"\u521b\u65b0\u65b9\u6cd5,\u521b\u65b0\u9a7f\u7ad9,\u521b\u65b0\u9a7f\u8def,\u521b\u65b0\u4e8b\u4ef6,\u521b\u65b0,\u521b\u65b0\u7684\u4e8b\u60c5,\u521b\u65b0\u65b9\u6cd5\u8bba"})}loadData(l){this.currentPage+=1,this.bookService.getBookList(this.listParam).subscribe(n=>{l.target.complete()})}}var C=u("cUpR"),y=e.nb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{width:30%;display:inline-block;margin:5px}"]],data:{}});function A(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,10,"ion-card",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,2).onClick()&&t),"click"===n&&(t=!1!==e.Ab(l,4).onClick(u)&&t),t}),i.R,i.e)),e.ob(1,49152,null,0,r.k,[e.h,e.k,e.x],null,null),e.ob(2,16384,null,0,b.n,[b.m,b.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Bb(3,1),e.ob(4,737280,null,0,r.Fb,[a.h,r.Cb,e.k,b.m,[2,b.n]],null,null),(l()(),e.pb(5,0,null,0,0,"img",[["style","width: 100%"]],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(6,0,null,0,4,"ion-card-header",[],null,null,null,i.P,i.f)),e.ob(7,49152,null,0,r.m,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.Q,i.g)),e.ob(9,49152,null,0,r.n,[e.h,e.k,e.x],null,null),(l()(),e.Gb(10,0,["",""]))],(function(l,n){var u=l(n,3,0,"/books/summary/"+n.context.$implicit._id);l(n,2,0,u),l(n,4,0)}),(function(l,n){l(n,5,0,n.context.$implicit.cover||"../../assets/book_default.jpg"),l(n,10,0,n.context.$implicit.name)}))}function B(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-header",[],null,null,null,i.Y,i.n)),e.ob(1,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.vb,i.K)),e.ob(3,49152,null,0,r.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,2,"ion-title",[],null,null,null,i.ub,i.J)),e.ob(5,49152,null,0,r.vb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["Books"])),(l()(),e.pb(7,0,null,null,10,"ion-content",[],null,null,null,i.T,i.i)),e.ob(8,49152,null,0,r.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,4,"ion-list",[],null,null,null,i.gb,i.u)),e.ob(10,49152,null,0,r.M,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,2,null,A)),e.ob(12,278528,null,0,a.i,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),e.Cb(131072,a.b,[e.h]),(l()(),e.pb(14,0,null,0,3,"ion-infinite-scroll",[["threshold","100px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.loadData(u)&&e),e}),i.bb,i.p)),e.ob(15,49152,null,0,r.C,[e.h,e.k,e.x],{threshold:[0,"threshold"]},null),(l()(),e.pb(16,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Loading more data..."]],null,null,null,i.ab,i.q)),e.ob(17,49152,null,0,r.D,[e.h,e.k,e.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var u=n.component;l(n,12,0,e.Hb(n,12,0,e.Ab(n,13).transform(u.books$))),l(n,15,0,"100px"),l(n,17,0,"bubbles","Loading more data...")}),null)}function I(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-books",[],null,null,null,B,y)),e.ob(1,114688,null,0,x,[v,C.i,C.h,b.a,b.m],null,null)],(function(l,n){l(n,1,0)}),null)}var S=e.lb("app-books",x,I,{},{},[]);class T{constructor(l,n,u,e,t,o){this.route=l,this.router=n,this.bookService=u,this.titleService=e,this.metaService=t,this.platformId=o}ngOnInit(){this.getBookById()}getBookById(){this.book$=this.route.paramMap.pipe(Object(s.a)(l=>this.bookService.getBookById(l.get("id")))),this.book$.subscribe(l=>{this.titleService.setTitle(l.name),this.metaService.updateTag({name:"description",content:l.name});let n=this.metaService.getTag('name= "keywords"')&&this.metaService.getTag('name= "keywords"').content||"\u521b\u65b0\u65b9\u6cd5,\u521b\u65b0\u9a7f\u7ad9,\u521b\u65b0\u9a7f\u8def,\u521b\u65b0\u4e8b\u4ef6,\u521b\u65b0,\u521b\u65b0\u7684\u4e8b\u60c5,\u521b\u65b0\u65b9\u6cd5\u8bba,";n+=l.tags.join(","),this.metaService.updateTag({name:"keywords",content:n})})}}var w=e.nb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{font-family:FZLanTingHei-qianhei,FZLanTingHeiS-R-GB,Microsoft YaHei,verdana,arial,helvetica,sans-serif;font-size:14px;line-height:2rem}ion-grid[_ngcontent-%COMP%], ion-infinite-scroll-content[_ngcontent-%COMP%]{background:#dce2f1}"]],data:{}});function D(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,9,"ion-toolbar",[],null,null,null,i.vb,i.K)),e.ob(1,49152,null,0,r.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.O,i.d)),e.ob(3,49152,null,0,r.j,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,6).onClick(u)&&t),t}),i.M,i.b)),e.ob(5,49152,null,0,r.e,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(6,16384,null,0,r.f,[[2,r.db],r.Cb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(7,0,null,0,2,"ion-title",[],null,null,null,i.ub,i.J)),e.ob(8,49152,null,0,r.vb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(9,0,["",""]))],(function(l,n){l(n,5,0,"home"),l(n,6,0,"home")}),(function(l,n){l(n,9,0,n.context.ngIf.name)}))}function F(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,34,"ion-grid",[],null,null,null,i.X,i.m)),e.ob(1,49152,null,0,r.y,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,23,"ion-row",[],null,null,null,i.nb,i.C)),e.ob(3,49152,null,0,r.eb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,21,"ion-col",[],null,null,null,i.S,i.h)),e.ob(5,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,19,"ion-item",[],null,null,null,i.db,i.s)),e.ob(7,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(8,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,i.tb,i.I)),e.ob(9,49152,null,0,r.ub,[e.h,e.k,e.x],null,null),(l()(),e.pb(10,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),e.pb(11,0,null,0,14,"ion-label",[],null,null,null,i.eb,i.t)),e.ob(12,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.pb(13,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),e.Gb(14,null,["",""])),(l()(),e.pb(15,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(16,null,["\u4f5c\u8005: ",""])),(l()(),e.pb(17,0,null,0,8,"p",[],null,null,null,null,null)),(l()(),e.pb(18,0,null,null,7,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,20).onClick()&&t),"click"===n&&(t=!1!==e.Ab(l,22).onClick(u)&&t),t}),i.N,i.c)),e.ob(19,49152,null,0,r.i,[e.h,e.k,e.x],null,null),e.ob(20,16384,null,0,b.n,[b.m,b.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Bb(21,1),e.ob(22,737280,null,0,r.Fb,[a.h,r.Cb,e.k,b.m,[2,b.n]],null,null),(l()(),e.pb(23,0,null,0,1,"ion-icon",[["name","eye-outline"]],null,null,null,i.Z,i.o)),e.ob(24,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Gb(-1,0,["\u9605\u8bfb "])),(l()(),e.pb(26,0,null,0,8,"ion-row",[],null,null,null,i.nb,i.C)),e.ob(27,49152,null,0,r.eb,[e.h,e.k,e.x],null,null),(l()(),e.pb(28,0,null,0,6,"ion-col",[],null,null,null,i.S,i.h)),e.ob(29,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(l()(),e.pb(30,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e.Gb(-1,null,[" \u6458\u8981 | \u8bc4\u8bba "])),(l()(),e.pb(32,0,null,0,2,"ion-text",[],null,null,null,i.rb,i.G)),e.ob(33,49152,null,0,r.sb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(34,0,[" "," "]))],(function(l,n){var u=l(n,21,0,"/books/"+n.context.ngIf._id);l(n,20,0,u),l(n,22,0),l(n,24,0,"eye-outline")}),(function(l,n){l(n,10,0,n.context.ngIf.cover||"../../../assets/book_default.jpg"),l(n,14,0,n.context.ngIf.name),l(n,16,0,n.context.ngIf.author),l(n,34,0,n.context.ngIf.abstract)}))}function P(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,4,"ion-header",[],null,null,null,i.Y,i.n)),e.ob(1,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,2,null,D)),e.ob(3,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),e.Cb(131072,a.b,[e.h]),(l()(),e.pb(5,0,null,null,4,"ion-content",[],null,null,null,i.T,i.i)),e.ob(6,49152,null,0,r.s,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,2,null,F)),e.ob(8,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),e.Cb(131072,a.b,[e.h])],(function(l,n){var u=n.component;l(n,3,0,e.Hb(n,3,0,e.Ab(n,4).transform(u.book$))),l(n,8,0,e.Hb(n,8,0,e.Ab(n,9).transform(u.book$)))}),null)}function G(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-books-summary",[],null,null,null,P,w)),e.ob(1,114688,null,0,T,[b.a,b.m,v,C.i,C.h,e.z],null,null)],(function(l,n){l(n,1,0)}),null)}var q=e.lb("app-books-summary",T,G,{},{},[]),E=u("s7LF"),_=u("LRne");class j{constructor(l,n,u,e){this.fb=l,this.bookService=n,this.router=u,this.route=e,this.uploadFile="",this.bookForm=this.fb.group({_id:[""],name:["",E.m.required],content:["",E.m.required],bookType:["",E.m.required],tags:[[]],cover:[""],showTime:[new Date,E.m.required],author:[""],abstract:["",E.m.required]}),this.validateFlag=!1}ngOnInit(){this.getBookById()}onSubmit(){this.bookForm.value._id&&""!=this.bookForm.value._id?this.bookService.updateBook(this.bookForm.value,this.bookForm.value._id).subscribe(l=>{this.validateFlag=!0,this.router.navigate([`/books/${l._id}`])}):(delete this.bookForm.value._id,this.bookService.createBook(this.bookForm.value).subscribe(l=>{this.validateFlag=!0,this.router.navigate([`/books/${l._id}`])}))}handleFileInput(l){this.bookService.postBannerFile(l.item(0)).subscribe(l=>{if(l.filename)if(confirm("\u9700\u8981\u66ff\u4ee3\u5c55\u793a\u56fe\u7247\u5417\uff1f"))this.bookForm.patchValue({bannerUrl:`/${l.filename}`});else{let n=document.createElement("textarea");n.style.position="fixed",n.style.left="0",n.style.top="0",n.style.opacity="0",n.value=l.filename,document.body.appendChild(n),n.focus(),n.select(),document.execCommand("copy"),document.body.removeChild(n),alert(`\u56fe\u7247\u4e0a\u4f20\u5730\u5740\u4e3a\uff1a/${l.filename}, \u5df2\u590d\u5236\u5230\u7c98\u8d34\u677f`)}else alert("\u683c\u5f0f\u4e0d\u6b63\u786e\u6216\u670d\u52a1\u5668\u9519\u8bef\uff0c\u8bf7\u91cd\u8bd5")})}getBookById(){let l=this.route.snapshot.paramMap.get("id");l&&this.bookService.getBookById(l).subscribe(l=>{this.bookForm.patchValue({_id:l._id,name:l.name,content:"\u5185\u5bb9\u4e0d\u5141\u8bb8\u66f4\u6539\uff0c\u66f4\u6539\u65e0\u6548",bookType:l.bookType,tags:l.tags,cover:l.cover,showTime:l.showTime,author:l.author,abstract:l.abstract})})}goback(){}fileUpload(l){if(-1==l[0].name.indexOf(".txt"))return void alert("\u76ee\u524d\u53ea\u652f\u6301txt\u683c\u5f0f\u6587\u4ef6\uff0c\u5176\u4ed6\u683c\u5f0f\u656c\u8bf7\u671f\u5f85");let n=this,u=new FileReader;const e=new Blob(l,{type:"text/plain"});u.onload=function(){n.bookForm.patchValue({content:this.result})},u.readAsText(e,"GB2312")}canDeactivate(){if(!this.bookForm.dirty||this.validateFlag)return!0;const l=window.confirm("\u60a8\u7684\u6570\u636e\u8fd8\u672a\u4fdd\u5b58\uff0c\u662f\u5426\u53d6\u6d88\u4fdd\u5b58?");return Object(_.a)(l)}}var H=e.nb({encapsulation:0,styles:[[""]],data:{}});function O(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,6,"ion-header",[],null,null,null,i.Y,i.n)),e.ob(1,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.vb,i.K)),e.ob(3,49152,null,0,r.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,2,"ion-title",[],null,null,null,i.ub,i.J)),e.ob(5,49152,null,0,r.vb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["New Book"])),(l()(),e.pb(7,0,null,null,157,"ion-content",[],null,null,null,i.T,i.i)),e.ob(8,49152,null,0,r.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,149,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==e.Ab(l,11).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Ab(l,11).onReset()&&t),t}),null,null)),e.ob(10,16384,null,0,E.q,[],null,null),e.ob(11,540672,null,0,E.d,[[8,null],[8,null]],{form:[0,"form"]},null),e.Db(2048,null,E.a,null,[E.d]),e.ob(13,16384,null,0,E.j,[[4,E.a]],null,null),(l()(),e.pb(14,0,null,null,13,"ion-item",[],null,null,null,i.db,i.s)),e.ob(15,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.eb,i.t)),e.ob(17,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["\u8f93\u5165\u4e66\u7c4d\u540d\u79f0*"])),(l()(),e.pb(19,0,null,0,8,"ion-input",[["formControlName","name"],["required","true"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Ab(l,22)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,22)._handleInputEvent(u.target)&&t),t}),i.cb,i.r)),e.ob(20,16384,null,0,E.l,[],{required:[0,"required"]},null),e.Db(1024,null,E.f,(function(l){return[l]}),[E.l]),e.ob(22,16384,null,0,r.Hb,[e.k],null,null),e.Db(1024,null,E.g,(function(l){return[l]}),[r.Hb]),e.ob(24,671744,null,0,E.c,[[3,E.a],[6,E.f],[8,null],[6,E.g],[2,E.p]],{name:[0,"name"]},null),e.Db(2048,null,E.h,null,[E.c]),e.ob(26,16384,null,0,E.i,[[4,E.h]],null,null),e.ob(27,49152,null,0,r.E,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),(l()(),e.pb(28,0,null,null,29,"ion-row",[],null,null,null,i.nb,i.C)),e.ob(29,49152,null,0,r.eb,[e.h,e.k,e.x],null,null),(l()(),e.pb(30,0,null,0,13,"ion-col",[["size","6"]],null,null,null,i.S,i.h)),e.ob(31,49152,null,0,r.r,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(32,0,null,0,11,"ion-item",[],null,null,null,i.db,i.s)),e.ob(33,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(34,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.eb,i.t)),e.ob(35,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["\u8f93\u5165\u4e66\u7c4d\u4f5c\u8005"])),(l()(),e.pb(37,0,null,0,6,"ion-input",[["formControlName","author"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Ab(l,38)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,38)._handleInputEvent(u.target)&&t),t}),i.cb,i.r)),e.ob(38,16384,null,0,r.Hb,[e.k],null,null),e.Db(1024,null,E.g,(function(l){return[l]}),[r.Hb]),e.ob(40,671744,null,0,E.c,[[3,E.a],[8,null],[8,null],[6,E.g],[2,E.p]],{name:[0,"name"]},null),e.Db(2048,null,E.h,null,[E.c]),e.ob(42,16384,null,0,E.i,[[4,E.h]],null,null),e.ob(43,49152,null,0,r.E,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.pb(44,0,null,0,13,"ion-col",[["size","6"]],null,null,null,i.S,i.h)),e.ob(45,49152,null,0,r.r,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(46,0,null,0,11,"ion-item",[],null,null,null,i.db,i.s)),e.ob(47,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(48,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.eb,i.t)),e.ob(49,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["\u8f93\u5165\u5c55\u793a\u65f6\u95f4"])),(l()(),e.pb(51,0,null,0,6,"ion-datetime",[["displayFormat","MM/DD/YYYY"],["formControlName","showTime"],["max","2212-12-09"],["min","2020-01-14"],["value","2020-02-23"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Ab(l,52)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,52)._handleChangeEvent(u.target)&&t),t}),i.U,i.j)),e.ob(52,16384,null,0,r.Gb,[e.k],null,null),e.Db(1024,null,E.g,(function(l){return[l]}),[r.Gb]),e.ob(54,671744,null,0,E.c,[[3,E.a],[8,null],[8,null],[6,E.g],[2,E.p]],{name:[0,"name"]},null),e.Db(2048,null,E.h,null,[E.c]),e.ob(56,16384,null,0,E.i,[[4,E.h]],null,null),e.ob(57,49152,null,0,r.t,[e.h,e.k,e.x],{displayFormat:[0,"displayFormat"],max:[1,"max"],min:[2,"min"],value:[3,"value"]},null),(l()(),e.pb(58,0,null,null,13,"ion-item",[],null,null,null,i.db,i.s)),e.ob(59,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(60,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.eb,i.t)),e.ob(61,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["\u8f93\u5165\u4e66\u7c4d\u4ecb\u7ecd*"])),(l()(),e.pb(63,0,null,0,8,"ion-textarea",[["formControlName","abstract"],["required","true"],["rows","5"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Ab(l,66)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,66)._handleInputEvent(u.target)&&t),t}),i.sb,i.H)),e.ob(64,16384,null,0,E.l,[],{required:[0,"required"]},null),e.Db(1024,null,E.f,(function(l){return[l]}),[E.l]),e.ob(66,16384,null,0,r.Hb,[e.k],null,null),e.Db(1024,null,E.g,(function(l){return[l]}),[r.Hb]),e.ob(68,671744,null,0,E.c,[[3,E.a],[6,E.f],[8,null],[6,E.g],[2,E.p]],{name:[0,"name"]},null),e.Db(2048,null,E.h,null,[E.c]),e.ob(70,16384,null,0,E.i,[[4,E.h]],null,null),e.ob(71,49152,null,0,r.tb,[e.h,e.k,e.x],{required:[0,"required"],rows:[1,"rows"]},null),(l()(),e.pb(72,0,null,null,53,"ion-row",[],null,null,null,i.nb,i.C)),e.ob(73,49152,null,0,r.eb,[e.h,e.k,e.x],null,null),(l()(),e.pb(74,0,null,0,25,"ion-col",[["size","6"]],null,null,null,i.S,i.h)),e.ob(75,49152,null,0,r.r,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(76,0,null,0,23,"ion-item",[],null,null,null,i.db,i.s)),e.ob(77,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(78,0,null,0,2,"ion-label",[],null,null,null,i.eb,i.t)),e.ob(79,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["\u8bf7\u9009\u62e9\u4e66\u7c4d\u7c7b\u578b*"])),(l()(),e.pb(81,0,null,0,18,"ion-select",[["formControlName","bookType"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Ab(l,82)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,82)._handleChangeEvent(u.target)&&t),t}),i.pb,i.D)),e.ob(82,16384,null,0,r.Gb,[e.k],null,null),e.Db(1024,null,E.g,(function(l){return[l]}),[r.Gb]),e.ob(84,671744,null,0,E.c,[[3,E.a],[8,null],[8,null],[6,E.g],[2,E.p]],{name:[0,"name"]},null),e.Db(2048,null,E.h,null,[E.c]),e.ob(86,16384,null,0,E.i,[[4,E.h]],null,null),e.ob(87,49152,null,0,r.ib,[e.h,e.k,e.x],null,null),(l()(),e.pb(88,0,null,0,2,"ion-select-option",[["value","bird"]],null,null,null,i.ob,i.E)),e.ob(89,49152,null,0,r.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Bird"])),(l()(),e.pb(91,0,null,0,2,"ion-select-option",[["value","cat"]],null,null,null,i.ob,i.E)),e.ob(92,49152,null,0,r.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Cat"])),(l()(),e.pb(94,0,null,0,2,"ion-select-option",[["value","dog"]],null,null,null,i.ob,i.E)),e.ob(95,49152,null,0,r.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Dog"])),(l()(),e.pb(97,0,null,0,2,"ion-select-option",[["value","honeybadger"]],null,null,null,i.ob,i.E)),e.ob(98,49152,null,0,r.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Honey Badger"])),(l()(),e.pb(100,0,null,0,25,"ion-col",[["size","6"]],null,null,null,i.S,i.h)),e.ob(101,49152,null,0,r.r,[e.h,e.k,e.x],{size:[0,"size"]},null),(l()(),e.pb(102,0,null,0,23,"ion-item",[],null,null,null,i.db,i.s)),e.ob(103,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(104,0,null,0,2,"ion-label",[],null,null,null,i.eb,i.t)),e.ob(105,49152,null,0,r.L,[e.h,e.k,e.x],null,null),(l()(),e.Gb(-1,0,["\u8bf7\u9009\u62e9\u4e66\u7c4d\u7684\u6807\u7b7e"])),(l()(),e.pb(107,0,null,0,18,"ion-select",[["formControlName","tags"],["multiple","true"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Ab(l,108)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,108)._handleChangeEvent(u.target)&&t),t}),i.pb,i.D)),e.ob(108,16384,null,0,r.Gb,[e.k],null,null),e.Db(1024,null,E.g,(function(l){return[l]}),[r.Gb]),e.ob(110,671744,null,0,E.c,[[3,E.a],[8,null],[8,null],[6,E.g],[2,E.p]],{name:[0,"name"]},null),e.Db(2048,null,E.h,null,[E.c]),e.ob(112,16384,null,0,E.i,[[4,E.h]],null,null),e.ob(113,49152,null,0,r.ib,[e.h,e.k,e.x],{multiple:[0,"multiple"]},null),(l()(),e.pb(114,0,null,0,2,"ion-select-option",[["value","bird"]],null,null,null,i.ob,i.E)),e.ob(115,49152,null,0,r.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Bird"])),(l()(),e.pb(117,0,null,0,2,"ion-select-option",[["value","cat"]],null,null,null,i.ob,i.E)),e.ob(118,49152,null,0,r.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Cat"])),(l()(),e.pb(120,0,null,0,2,"ion-select-option",[["value","dog"]],null,null,null,i.ob,i.E)),e.ob(121,49152,null,0,r.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Dog"])),(l()(),e.pb(123,0,null,0,2,"ion-select-option",[["value","honeybadger"]],null,null,null,i.ob,i.E)),e.ob(124,49152,null,0,r.jb,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.Gb(-1,0,["Honey Badger"])),(l()(),e.pb(126,0,null,null,11,"ion-item",[],null,null,null,i.db,i.s)),e.ob(127,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(128,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.eb,i.t)),e.ob(129,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["\u8f93\u5165\u4e66\u7c4d\u5c01\u9762\u5730\u5740"])),(l()(),e.pb(131,0,null,0,6,"ion-input",[["formControlName","cover"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Ab(l,132)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,132)._handleInputEvent(u.target)&&t),t}),i.cb,i.r)),e.ob(132,16384,null,0,r.Hb,[e.k],null,null),e.Db(1024,null,E.g,(function(l){return[l]}),[r.Hb]),e.ob(134,671744,null,0,E.c,[[3,E.a],[8,null],[8,null],[6,E.g],[2,E.p]],{name:[0,"name"]},null),e.Db(2048,null,E.h,null,[E.c]),e.ob(136,16384,null,0,E.i,[[4,E.h]],null,null),e.ob(137,49152,null,0,r.E,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.pb(138,0,null,null,13,"ion-item",[],null,null,null,i.db,i.s)),e.ob(139,49152,null,0,r.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(140,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,i.eb,i.t)),e.ob(141,49152,null,0,r.L,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Gb(-1,0,["\u8f93\u5165\u4e66\u7c4d\u5185\u5bb9*"])),(l()(),e.pb(143,0,null,0,8,"ion-textarea",[["formControlName","content"],["required","true"],["rows","10"],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Ab(l,146)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,146)._handleInputEvent(u.target)&&t),t}),i.sb,i.H)),e.ob(144,16384,null,0,E.l,[],{required:[0,"required"]},null),e.Db(1024,null,E.f,(function(l){return[l]}),[E.l]),e.ob(146,16384,null,0,r.Hb,[e.k],null,null),e.Db(1024,null,E.g,(function(l){return[l]}),[r.Hb]),e.ob(148,671744,null,0,E.c,[[3,E.a],[6,E.f],[8,null],[6,E.g],[2,E.p]],{name:[0,"name"]},null),e.Db(2048,null,E.h,null,[E.c]),e.ob(150,16384,null,0,E.i,[[4,E.h]],null,null),e.ob(151,49152,null,0,r.tb,[e.h,e.k,e.x],{required:[0,"required"],rows:[1,"rows"]},null),(l()(),e.pb(152,0,null,null,6,"ion-grid",[],null,null,null,i.X,i.m)),e.ob(153,49152,null,0,r.y,[e.h,e.k,e.x],null,null),(l()(),e.pb(154,0,null,0,4,"ion-row",[],null,null,null,i.nb,i.C)),e.ob(155,49152,null,0,r.eb,[e.h,e.k,e.x],null,null),(l()(),e.pb(156,0,null,0,2,"ion-button",[["color","tertiary"],["expand","block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onSubmit()&&e),e}),i.N,i.c)),e.ob(157,49152,null,0,r.i,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"]},null),(l()(),e.Gb(-1,0,["\u63d0\u4ea4"])),(l()(),e.pb(159,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.W,i.k)),e.ob(160,49152,null,0,r.u,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.pb(161,0,null,0,3,"ion-fab-button",[],null,null,null,i.V,i.l)),e.ob(162,49152,null,0,r.v,[e.h,e.k,e.x],null,null),(l()(),e.pb(163,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.Z,i.o)),e.ob(164,49152,null,0,r.A,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.pb(165,0,null,null,1,"button",[["style","right:60px; bottom:60px;position: fixed; z-index: 9999"]],null,null,null,null,null)),(l()(),e.pb(166,0,null,null,0,"input",[["id","form_file"],["style","position: absolute;left: 0;top: 0;width: 56px;height: 56px;opacity: 0"],["type","file"]],null,[[null,"change"]],(function(l,n,u){var e=!0;return"change"===n&&(e=!1!==l.component.fileUpload(u.target.files)&&e),e}),null,null))],(function(l,n){var u=n.component;l(n,11,0,u.bookForm),l(n,17,0,"floating"),l(n,20,0,"true"),l(n,24,0,"name"),l(n,27,0,"true","text"),l(n,31,0,"6"),l(n,35,0,"floating"),l(n,40,0,"author"),l(n,43,0,"text"),l(n,45,0,"6"),l(n,49,0,"floating"),l(n,54,0,"showTime"),l(n,57,0,"MM/DD/YYYY","2212-12-09","2020-01-14","2020-02-23"),l(n,61,0,"floating"),l(n,64,0,"true"),l(n,68,0,"abstract"),l(n,71,0,"true","5"),l(n,75,0,"6"),l(n,84,0,"bookType"),l(n,89,0,"bird"),l(n,92,0,"cat"),l(n,95,0,"dog"),l(n,98,0,"honeybadger"),l(n,101,0,"6"),l(n,110,0,"tags"),l(n,113,0,"true"),l(n,115,0,"bird"),l(n,118,0,"cat"),l(n,121,0,"dog"),l(n,124,0,"honeybadger"),l(n,129,0,"floating"),l(n,134,0,"cover"),l(n,137,0,"text"),l(n,141,0,"floating"),l(n,144,0,"true"),l(n,148,0,"content"),l(n,151,0,"true","10"),l(n,157,0,"tertiary",!u.bookForm.valid,"block"),l(n,160,0,"end","bottom"),l(n,164,0,"add")}),(function(l,n){l(n,9,0,e.Ab(n,13).ngClassUntouched,e.Ab(n,13).ngClassTouched,e.Ab(n,13).ngClassPristine,e.Ab(n,13).ngClassDirty,e.Ab(n,13).ngClassValid,e.Ab(n,13).ngClassInvalid,e.Ab(n,13).ngClassPending),l(n,19,0,e.Ab(n,20).required?"":null,e.Ab(n,26).ngClassUntouched,e.Ab(n,26).ngClassTouched,e.Ab(n,26).ngClassPristine,e.Ab(n,26).ngClassDirty,e.Ab(n,26).ngClassValid,e.Ab(n,26).ngClassInvalid,e.Ab(n,26).ngClassPending),l(n,37,0,e.Ab(n,42).ngClassUntouched,e.Ab(n,42).ngClassTouched,e.Ab(n,42).ngClassPristine,e.Ab(n,42).ngClassDirty,e.Ab(n,42).ngClassValid,e.Ab(n,42).ngClassInvalid,e.Ab(n,42).ngClassPending),l(n,51,0,e.Ab(n,56).ngClassUntouched,e.Ab(n,56).ngClassTouched,e.Ab(n,56).ngClassPristine,e.Ab(n,56).ngClassDirty,e.Ab(n,56).ngClassValid,e.Ab(n,56).ngClassInvalid,e.Ab(n,56).ngClassPending),l(n,63,0,e.Ab(n,64).required?"":null,e.Ab(n,70).ngClassUntouched,e.Ab(n,70).ngClassTouched,e.Ab(n,70).ngClassPristine,e.Ab(n,70).ngClassDirty,e.Ab(n,70).ngClassValid,e.Ab(n,70).ngClassInvalid,e.Ab(n,70).ngClassPending),l(n,81,0,e.Ab(n,86).ngClassUntouched,e.Ab(n,86).ngClassTouched,e.Ab(n,86).ngClassPristine,e.Ab(n,86).ngClassDirty,e.Ab(n,86).ngClassValid,e.Ab(n,86).ngClassInvalid,e.Ab(n,86).ngClassPending),l(n,107,0,e.Ab(n,112).ngClassUntouched,e.Ab(n,112).ngClassTouched,e.Ab(n,112).ngClassPristine,e.Ab(n,112).ngClassDirty,e.Ab(n,112).ngClassValid,e.Ab(n,112).ngClassInvalid,e.Ab(n,112).ngClassPending),l(n,131,0,e.Ab(n,136).ngClassUntouched,e.Ab(n,136).ngClassTouched,e.Ab(n,136).ngClassPristine,e.Ab(n,136).ngClassDirty,e.Ab(n,136).ngClassValid,e.Ab(n,136).ngClassInvalid,e.Ab(n,136).ngClassPending),l(n,143,0,e.Ab(n,144).required?"":null,e.Ab(n,150).ngClassUntouched,e.Ab(n,150).ngClassTouched,e.Ab(n,150).ngClassPristine,e.Ab(n,150).ngClassDirty,e.Ab(n,150).ngClassValid,e.Ab(n,150).ngClassInvalid,e.Ab(n,150).ngClassPending)}))}function z(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-books-form",[],null,null,null,O,H)),e.ob(1,114688,null,0,j,[E.b,v,b.m,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var M=e.lb("app-books-form",j,z,{},{},[]);class N{constructor(l,n,u,e,t,o){this.route=l,this.router=n,this.bookService=u,this.titleService=e,this.metaService=t,this.platformId=o,this.currentPage=1,this.blogId=""}ngOnInit(){this.blogId=this.route.snapshot.params.id,this.getBookById()}getBookById(l=function(l){}){this.bookService.getBookContentById({id:this.blogId,page:this.currentPage}).subscribe(n=>{this.book=n,this.titleService.setTitle(n.name),this.metaService.updateTag({name:"description",content:n.name});let u=this.metaService.getTag('name= "keywords"')&&this.metaService.getTag('name= "keywords"').content||"\u521b\u65b0\u65b9\u6cd5,\u521b\u65b0\u9a7f\u7ad9,\u521b\u65b0\u9a7f\u8def,\u521b\u65b0\u4e8b\u4ef6,\u521b\u65b0,\u521b\u65b0\u7684\u4e8b\u60c5,\u521b\u65b0\u65b9\u6cd5\u8bba,";u+=n.tags.join(","),this.metaService.updateTag({name:"keywords",content:u}),l(n)})}getPrePage(l){1!=this.currentPage&&(this.currentPage--,this.getBookById((function(n){l.target.complete()})))}getNextPage(l){this.currentPage++;let n=this;setTimeout((function(){n.book.content="",n.getBookById((function(n){l.target.complete(),""==n.content&&(l.target.disabled=!0),document.querySelector("ion-content").scrollToTop(500)}))}),1e3)}}var $=e.nb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{font-family:FZLanTingHei-qianhei,FZLanTingHeiS-R-GB,Microsoft YaHei,verdana,arial,helvetica,sans-serif;font-size:14px;line-height:2rem}ion-grid[_ngcontent-%COMP%]{background:#dce2f1}ion-text[_ngcontent-%COMP%]{white-space:pre-wrap}"]],data:{}});function L(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,8,"ion-grid",[],null,null,null,i.X,i.m)),e.ob(1,49152,null,0,r.y,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,6,"ion-row",[],null,null,null,i.nb,i.C)),e.ob(3,49152,null,0,r.eb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-col",[],null,null,null,i.S,i.h)),e.ob(5,49152,null,0,r.r,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-text",[],null,null,null,i.rb,i.G)),e.ob(7,49152,null,0,r.sb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(8,0,[" "," "]))],null,(function(l,n){var u=n.component;l(n,8,0,u.book&&u.book.content)}))}function R(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,11,"ion-header",[],null,null,null,i.Y,i.n)),e.ob(1,49152,null,0,r.z,[e.h,e.k,e.x],null,null),(l()(),e.pb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.vb,i.K)),e.ob(3,49152,null,0,r.xb,[e.h,e.k,e.x],null,null),(l()(),e.pb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.O,i.d)),e.ob(5,49152,null,0,r.j,[e.h,e.k,e.x],null,null),(l()(),e.pb(6,0,null,0,2,"ion-back-button",[["defaultHref","home"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Ab(l,8).onClick(u)&&t),t}),i.M,i.b)),e.ob(7,49152,null,0,r.e,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.ob(8,16384,null,0,r.f,[[2,r.db],r.Cb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.pb(9,0,null,0,2,"ion-title",[],null,null,null,i.ub,i.J)),e.ob(10,49152,null,0,r.vb,[e.h,e.k,e.x],null,null),(l()(),e.Gb(11,0,["",""])),(l()(),e.pb(12,0,null,null,11,"ion-content",[],null,null,null,i.T,i.i)),e.ob(13,49152,null,0,r.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(14,0,null,0,3,"ion-refresher",[["slot","fixed"]],null,[[null,"ionRefresh"]],(function(l,n,u){var e=!0;return"ionRefresh"===n&&(e=!1!==l.component.getPrePage(u)&&e),e}),i.mb,i.A)),e.ob(15,49152,null,0,r.Y,[e.h,e.k,e.x],null,null),(l()(),e.pb(16,0,null,0,1,"ion-refresher-content",[],null,null,null,i.lb,i.B)),e.ob(17,49152,null,0,r.Z,[e.h,e.k,e.x],null,null),(l()(),e.eb(16777216,null,0,1,null,L)),e.ob(19,16384,null,0,a.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.pb(20,0,null,0,3,"ion-infinite-scroll",[["threshold","10px"]],null,[[null,"ionInfinite"]],(function(l,n,u){var e=!0;return"ionInfinite"===n&&(e=!1!==l.component.getNextPage(u)&&e),e}),i.bb,i.p)),e.ob(21,49152,null,0,r.C,[e.h,e.k,e.x],{threshold:[0,"threshold"]},null),(l()(),e.pb(22,0,null,0,1,"ion-infinite-scroll-content",[["loadingSpinner","bubbles"],["loadingText","Getting more content..."]],null,null,null,i.ab,i.q)),e.ob(23,49152,null,0,r.D,[e.h,e.k,e.x],{loadingSpinner:[0,"loadingSpinner"],loadingText:[1,"loadingText"]},null)],(function(l,n){var u=n.component;l(n,7,0,"home"),l(n,8,0,"home"),l(n,19,0,u.book),l(n,21,0,"10px"),l(n,23,0,"bubbles","Getting more content...")}),(function(l,n){var u=n.component;l(n,11,0,u.book&&u.book.name)}))}function Y(l){return e.Ib(0,[(l()(),e.pb(0,0,null,null,1,"app-books-detail",[],null,null,null,R,$)),e.ob(1,114688,null,0,N,[b.a,b.m,v,C.i,C.h,e.z],null,null)],(function(l,n){l(n,1,0)}),null)}var U=e.lb("app-books-detail",N,Y,{},{},[]);class V{}u.d(n,"BooksPageModuleNgFactory",(function(){return J}));var J=e.mb(t,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[o.a,S,q,M,U]],[3,e.j],e.v]),e.yb(4608,a.l,a.k,[e.s,[2,a.r]]),e.yb(4608,E.o,E.o,[]),e.yb(4608,r.a,r.a,[e.x,e.g]),e.yb(4608,r.Bb,r.Bb,[r.a,e.j,e.p]),e.yb(4608,r.Eb,r.Eb,[r.a,e.j,e.p]),e.yb(4608,E.b,E.b,[]),e.yb(4608,f,f,[e.z,e.c,h.c,e.x,r.Ib]),e.yb(4608,v,v,[f]),e.yb(1073742336,a.c,a.c,[]),e.yb(1073742336,E.n,E.n,[]),e.yb(1073742336,E.e,E.e,[]),e.yb(1073742336,r.zb,r.zb,[]),e.yb(1073742336,E.k,E.k,[]),e.yb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),e.yb(1073742336,V,V,[]),e.yb(1073742336,t,t,[]),e.yb(1024,b.k,(function(){return[[{path:"",component:x},{path:"summary/:id",component:T},{path:"new",component:j},{path:"edit/:id",component:j},{path:":id",component:N}]]}),[])])}))}}]);