(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{OlGY:function(l,e,n){"use strict";n.r(e);var u=n("8Y7J");class t{}var b=n("pMnS"),r=n("MKJQ"),a=n("sZkV"),o=n("s7LF"),i=n("IheW"),s=n("aOlj");class c{constructor(l){this.service=l}getFeedBack(l){let e=(new i.i).set("page",l.get("page")||"1");return this.service.get({url:"api/feedback",params:e})}createFeedback(l){return this.service.post({url:"api/feedback",form:l})}deleteFeedbackById(l){return this.service.delete(`api/feedback/${l}`)}}class p{constructor(l,e,n,u,t){this.fb=l,this.feedBackService=e,this.router=n,this.route=u,this.location=t,this.feedBackForm=this.fb.group({body:["",o.m.required],name:["",o.m.required],email:["",o.m.required],phone:[""],company:[""]})}ngOnInit(){}onSubmit(){this.feedBackService.createFeedback(this.feedBackForm.value).subscribe(l=>{this.router.navigated=!1,this.router.navigate([this.router.url]),this.feedBackForm.reset()})}}var d=n("iInd"),h=n("SVse"),k=u.nb({encapsulation:0,styles:[[""]],data:{}});function z(l){return u.Kb(0,[(l()(),u.pb(0,0,null,null,6,"ion-header",[],null,null,null,r.Z,r.o)),u.ob(1,49152,null,0,a.z,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.vb,r.K)),u.ob(3,49152,null,0,a.xb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,2,"ion-title",[],null,null,null,r.ub,r.J)),u.ob(5,49152,null,0,a.vb,[u.h,u.k,u.x],null,null),(l()(),u.Ib(-1,0,["About"])),(l()(),u.pb(7,0,null,null,2,"ion-content",[],null,null,null,r.V,r.k)),u.ob(8,49152,null,0,a.s,[u.h,u.k,u.x],null,null),(l()(),u.Ib(-1,0,[" About me\n"]))],null,null)}function f(l){return u.Kb(0,[(l()(),u.pb(0,0,null,null,1,"app-about",[],null,null,null,z,k)),u.ob(1,114688,null,0,p,[o.b,c,d.m,d.a,h.g],null,null)],(function(l,e){l(e,1,0)}),null)}var m=u.lb("app-about",p,f,{},{},[]);class v{}n.d(e,"AboutModuleNgFactory",(function(){return g}));var g=u.mb(t,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[b.a,m]],[3,u.j],u.v]),u.zb(4608,h.l,h.k,[u.s,[2,h.r]]),u.zb(4608,o.o,o.o,[]),u.zb(4608,o.b,o.b,[]),u.zb(4608,a.a,a.a,[u.x,u.g]),u.zb(4608,a.Bb,a.Bb,[a.a,u.j,u.p]),u.zb(4608,a.Eb,a.Eb,[a.a,u.j,u.p]),u.zb(4608,c,c,[s.a]),u.zb(1073742336,h.c,h.c,[]),u.zb(1073742336,o.n,o.n,[]),u.zb(1073742336,o.e,o.e,[]),u.zb(1073742336,o.k,o.k,[]),u.zb(1073742336,a.zb,a.zb,[]),u.zb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),u.zb(1073742336,v,v,[]),u.zb(1073742336,t,t,[]),u.zb(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);