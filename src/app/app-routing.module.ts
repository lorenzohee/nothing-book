import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  }, {
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksPageModule)
  }, {
    path: 'cfgs',
    loadChildren: () => import('./cfg/cfg.module').then(mod => mod.CfgModule),
  }, {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule)
  }, {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
