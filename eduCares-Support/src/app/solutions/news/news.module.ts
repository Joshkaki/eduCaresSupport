import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsHomeComponent } from './news-home/news-home.component';
import { NewsOneComponent } from './news-one/news-one.component';
import { NewsTwoComponent } from './news-two/news-two.component';
import { NewsThreeComponent } from './news-three/news-three.component';
import { NewsFourComponent } from './news-four/news-four.component';
import { NewsFiveComponent } from './news-five/news-five.component';
import { NewsSixComponent } from './news-six/news-six.component';
import { NewsSevenComponent } from './news-seven/news-seven.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [NewsHomeComponent, NewsOneComponent, NewsTwoComponent, NewsThreeComponent, NewsFourComponent, NewsFiveComponent, NewsSixComponent, NewsSevenComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,

    MatGridListModule,
    MatDividerModule,
    MatCardModule,
    MDBBootstrapModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatToolbarModule
  ]
})
export class NewsModule { }
