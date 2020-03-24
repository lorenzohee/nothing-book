import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CfgListComponent } from './cfg-list/cfg-list.component';
import { CfgDetailComponent } from './cfg-detail/cfg-detail.component';
import { CfgFormComponent } from './cfg-form/cfg-form.component';

const routes: Routes = [{
  path: '',
  component: CfgListComponent
}, {
  path: 'new',
  component: CfgFormComponent
}, {
  path: ':id',
  children: [
    {
      path: '',
      component: CfgDetailComponent
    }, {
      path: 'edit',
      component: CfgFormComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CfgRoutingModule { }
