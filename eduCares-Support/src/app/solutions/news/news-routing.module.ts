import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsHomeComponent } from './news-home/news-home.component';
import { pathToFileURL } from 'url';
import { NewsOneComponent } from './news-one/news-one.component';
import { NewsTwoComponent } from './news-two/news-two.component';
import { NewsFourComponent } from './news-four/news-four.component';
import { NewsFiveComponent } from './news-five/news-five.component';
import { NewsSixComponent } from './news-six/news-six.component';
import { NewsSevenComponent } from './news-seven/news-seven.component';
import { NewsThreeComponent } from './news-three/news-three.component';


const routes: Routes = [
  { path: '', component: NewsHomeComponent },
  { path: 'news-home', component: NewsHomeComponent },
  { path: 'news-1', component: NewsOneComponent },
  { path: 'news-2', component: NewsTwoComponent },
  { path: 'news-3', component: NewsThreeComponent },
  { path: 'news-4', component: NewsFourComponent },
  { path: 'news-5', component: NewsFiveComponent },
  { path: 'news-6', component: NewsSixComponent },
  { path: 'news-7', component: NewsSevenComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
