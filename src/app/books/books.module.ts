import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksPageRoutingModule } from './books-routing.module';

import { BooksPage } from './books.page';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';
import { BooksFormComponent } from './books-form/books-form.component';
import { BooksSummaryComponent } from './books-summary/books-summary.component';
import { BooksService } from '../service/books.service';
import { BaseService } from '../service/base.service';
import { GoogleAdComponent } from '../google-ad/google-ad.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    BooksPageRoutingModule
  ],
  providers: [BooksService, BaseService],
  declarations: [BooksPage, BooksListComponent, BooksDetailComponent, BooksFormComponent, BooksSummaryComponent,GoogleAdComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BooksPageModule {}
