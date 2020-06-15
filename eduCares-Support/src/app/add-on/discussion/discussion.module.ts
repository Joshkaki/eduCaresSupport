import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscussionRoutingModule } from './discussion-routing.module';
import { DiscussionHomeComponent } from './discussion-home/discussion-home.component';
import { DiscussionOneComponent } from './discussion-one/discussion-one.component';
import { DiscussionTwoComponent } from './discussion-two/discussion-two.component';
import { DiscussionThreeComponent } from './discussion-three/discussion-three.component';
import { DiscussionFourComponent } from './discussion-four/discussion-four.component';
import { DiscussionFiveComponent } from './discussion-five/discussion-five.component';
import { DiscussionSixComponent } from './discussion-six/discussion-six.component';
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
  declarations: [DiscussionHomeComponent, DiscussionOneComponent, DiscussionTwoComponent, DiscussionThreeComponent, DiscussionFourComponent, DiscussionFiveComponent, DiscussionSixComponent],
  imports: [
    CommonModule,
    DiscussionRoutingModule,

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
export class DiscussionModule { }
