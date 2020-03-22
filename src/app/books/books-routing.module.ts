import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksPage } from './books.page';
import { BooksSummaryComponent } from './books-summary/books-summary.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { BooksFormComponent } from './books-form/books-form.component';

const routes: Routes = [
  {
    path: '',
    component: BooksPage
  },
  {
    path: 'summary/:id',
    component: BooksSummaryComponent
  },
  {
    path: 'new',
    component: BooksFormComponent
  },
  {
    path: 'edit/:id',
    component: BooksFormComponent
  },
  {
    path: ':id',
    component: BooksDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
