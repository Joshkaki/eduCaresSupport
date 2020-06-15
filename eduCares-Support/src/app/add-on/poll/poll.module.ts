import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PollRoutingModule } from './poll-routing.module';
import { PollHomeComponent } from './poll-home/poll-home.component';
import { PollOneComponent } from './poll-one/poll-one.component';
import { PollTwoComponent } from './poll-two/poll-two.component';
import { PollThreeComponent } from './poll-three/poll-three.component';
import { PollFourComponent } from './poll-four/poll-four.component';
import { PollFiveComponent } from './poll-five/poll-five.component';
import { PollSixComponent } from './poll-six/poll-six.component';
import { PollSevenComponent } from './poll-seven/poll-seven.component';
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
  declarations: [PollHomeComponent, PollOneComponent, PollTwoComponent, PollThreeComponent, PollFourComponent, PollFiveComponent, PollSixComponent, PollSevenComponent],
  imports: [
    CommonModule,
    PollRoutingModule,


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
export class PollModule { }
