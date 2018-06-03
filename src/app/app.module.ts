import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavComponent } from './nav/nav.component';
import { RasyComponent } from './rasy/rasy.component';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CatService } from './services/cat.service';
import { DividePipe } from './rasy/divide.pipe';
import { PageTitleComponent } from './page-title/page-title.component';
import { AnatomyComponent } from './anatomy/anatomy.component';
import { BlogComponent } from './blog/blog.component';
import { ArticleComponent } from './blog/article/article.component';
import { PromotionComponent } from './promotion/promotion.component';
import { PromotionService } from './services/promotion.service';
import { PaginationComponent } from './blog/pagination/pagination.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'rasy',
    component: RasyComponent
  },
  {
    path: 'budowa',
    component: AnatomyComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'blog/:page',
    component: BlogComponent
  },
  {
    path: 'kontakt',
    component: ContactComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
    //redirectTo:''
  }
]


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    NavComponent,
    PageNotFoundComponent,
    RasyComponent,
    DividePipe,
    PageTitleComponent,
    AnatomyComponent,
    BlogComponent,
    ArticleComponent,
    PromotionComponent,
    PaginationComponent,
    
    
  ],
  bootstrap:    [ AppComponent ],
  providers: [CatService, PromotionService]
})
export class AppModule { }
